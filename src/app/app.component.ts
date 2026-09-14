import { Component, ChangeDetectionStrategy } from "@angular/core";
import { FooterComponent } from "./components/footer/footer.component";
import { MainApplicationComponent } from "./components/main-application/main-application.component";
import { NavigationMenuComponent } from "./components/navigationmenu/navigationmenu.component";

@Component({
  selector: "app-root",
  imports: [NavigationMenuComponent, MainApplicationComponent, FooterComponent],
  templateUrl: "./app.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "dnyaneshwargiri.github.io";
}
