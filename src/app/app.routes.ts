import { Routes } from "@angular/router";

export const routes: Routes = [
  { path: "", redirectTo: "/search", pathMatch: "full" },
  {
    path: "search",
    loadComponent: () =>
      import("./modules/home/home.component").then((m) => m.HomeComponent),
  },
  {
    path: "country/:countryCode",
    loadComponent: () =>
      import("./modules/country/country.component").then(
        (m) => m.CountryComponent,
      ),
  },
];
