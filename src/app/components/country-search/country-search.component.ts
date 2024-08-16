import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms"; // Import FormsModule
import { CountryService } from "../../services/country.service";
import { OnInit } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { RouterTestingModule } from "@angular/router/testing";
import { Country } from "../../models/country.model";

@Component({
  selector: "app-country-search",
  templateUrl: "./country-search.component.html",
  styleUrls: ["./country-search.component.css"],
  standalone: true,
  imports: [FormsModule, RouterModule, CommonModule, RouterTestingModule],
})
export class CountrySearchComponent implements OnInit {
  countries: Country[] = [];
  filteredCountries: Country[] = [];
  searchTerm = "";

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {
    this.countryService.getCountries().subscribe((data: Country[]) => {
      this.countries = data;
      this.filteredCountries = data;
    });
  }

  onSearchChange(): void {
    this.filteredCountries = this.countries.filter((country) =>
      country.name.toLowerCase().includes(this.searchTerm.toLowerCase()),
    );
  }
}
