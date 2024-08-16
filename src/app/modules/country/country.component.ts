import { Component } from "@angular/core";
import { CountryPageComponent } from "../../components/country-page/country-page.component";

@Component({
  selector: "app-country",
  templateUrl: "./country.component.html",
  styleUrl: "./country.component.css",
  standalone: true,
  imports: [CountryPageComponent],
})
export class CountryComponent {}
