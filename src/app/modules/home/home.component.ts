import { Component } from "@angular/core";
import { CountrySearchComponent } from "../../components/country-search/country-search.component";
import { RandomCountriesWidgetComponent } from "../../components/random-countries-widget/random-countries-widget.component";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
  standalone: true,
  imports: [CountrySearchComponent, RandomCountriesWidgetComponent],
})
export class HomeComponent {}
