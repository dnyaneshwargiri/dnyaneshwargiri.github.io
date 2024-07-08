import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { FooterComponent } from "./components/footer/footer.component";
import { MainApplicationComponent } from "./components/main-application/main-application.component";
import { NavigationMenuComponent } from "./components/navigationmenu/navigationmenu.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    RouterOutlet,
    NavigationMenuComponent,
    MainApplicationComponent,
    FooterComponent,
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "dnyaneshwargiri.github.io";
}
