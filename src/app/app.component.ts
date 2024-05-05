import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { SidemenuComponent } from "./components/sidemenu/sidemenu.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, SidemenuComponent, FooterComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "dnyaneshwargiri.github.io";
}
