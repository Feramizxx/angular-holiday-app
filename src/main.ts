/// <reference types="@angular/localize" />

import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import { provideHttpClient, withFetch } from "@angular/common/http";
import { provideRouter } from "@angular/router";
import { routes } from "./app/app.routes";

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient(withFetch()), provideRouter(routes)],
});
