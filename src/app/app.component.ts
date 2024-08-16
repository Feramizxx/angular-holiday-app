import { Component } from "@angular/core";
import { HomeComponent } from "./modules/home/home.component";
import { RouterLink, RouterModule, RouterOutlet } from "@angular/router";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
  standalone: true,
  imports: [HomeComponent, RouterModule, RouterOutlet, RouterLink],
})
export class AppComponent {
  title = "angular-holiday-app";
}
