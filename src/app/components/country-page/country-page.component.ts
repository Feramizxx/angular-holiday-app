import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CountryService } from "../../services/country.service";
import { CountryDetail } from "../../models/country-detail";
import { CommonModule } from "@angular/common";
import { HolidayListComponent } from "../holiday-list/holiday-list.component";

@Component({
  selector: "app-country-page",
  templateUrl: "./country-page.component.html",
  standalone: true,
  styleUrls: ["./country-page.component.css"],
  imports: [CommonModule, HolidayListComponent],
})
export class CountryPageComponent implements OnInit {
  countryCode: string | null = "";
  countryDetails: CountryDetail | null = null;
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private countryService: CountryService,
  ) {}

  ngOnInit(): void {
    this.countryCode = this.route.snapshot.paramMap.get("countryCode");
    if (this.countryCode) {
      this.countryService.getCountryDetails(this.countryCode).subscribe(
        (data: CountryDetail) => {
          this.countryDetails = data;
          console.log(data, "data");
        },
        (err) => {
          this.error = "Unable to fetch country details";
          console.error(err);
        },
      );
    }
  }
}
