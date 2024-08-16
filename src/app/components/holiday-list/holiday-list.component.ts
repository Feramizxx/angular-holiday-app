import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { CountryService } from "../../services/country.service";
import { Holiday } from "../../models/holiday.model";

@Component({
  selector: "app-holiday-list",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./holiday-list.component.html",
  styleUrls: ["./holiday-list.component.css"],
})
export class HolidayListComponent implements OnInit, OnChanges {
  @Input() countryCode = "";
  currentYear: number = new Date().getFullYear();
  holidays: Holiday[] = [];

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {
    if (this.countryCode) {
      this.fetchHolidays(this.currentYear);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["countryCode"] && !changes["countryCode"].isFirstChange()) {
      this.fetchHolidays(this.currentYear);
    }
  }

  fetchHolidays(year: number): void {
    this.countryService.getPublicHolidays(year, this.countryCode).subscribe(
      (holidays: Holiday[]) => (this.holidays = holidays),
      (error) => console.error("Error fetching holidays:", error),
    );
  }

  onYearSelected(year: number): void {
    this.currentYear = year;
    this.fetchHolidays(year);
  }

  getYearsRange(): number[] {
    const startYear = 2020;
    const endYear = 2030;
    const years = [];
    for (let year = startYear; year <= endYear; year++) {
      years.push(year);
    }
    return years;
  }
}
