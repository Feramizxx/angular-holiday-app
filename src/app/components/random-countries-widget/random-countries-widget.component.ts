import { Component, OnInit } from "@angular/core";
import { CountryService } from "../../services/country.service";
import { CommonModule } from "@angular/common";
import { Holiday } from "../../models/holiday.model";
import { Country } from "../../models/country.model";

@Component({
  selector: "app-random-countries-widget",
  templateUrl: "./random-countries-widget.component.html",
  styleUrl: "./random-countries-widget.component.css",
  standalone: true,
  imports: [CommonModule],
})
export class RandomCountriesWidgetComponent implements OnInit {
  randomCountries: { name: string; holiday: Holiday | null }[] = [];
  country: Country[] = [];

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {
    this.loadRandomCountries();
  }

  loadRandomCountries(): void {
    this.countryService.getCountries().subscribe((countries: Country[]) => {
      const randomCountries = this.getRandomCountries(countries, 3);
      randomCountries.forEach((country) => {
        this.countryService
          .getNextPublicHolidays(country.countryCode)
          .subscribe(
            (holidays: Holiday[]) => {
              this.randomCountries.push({
                name: country.name,
                holiday: holidays.length > 0 ? holidays[0] : null,
              });
            },
            (error) => {
              console.error("Error fetching holiday data", error);
              this.randomCountries.push({ name: country.name, holiday: null });
            },
          );
      });
    });
  }

  getRandomCountries(countries: Country[], count: number): Country[] {
    const shuffled = countries.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }
}
