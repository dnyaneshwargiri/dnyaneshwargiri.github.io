import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { MenuOptions } from "../../types/models";

@Component({
  selector: "navigation-menu",
  imports: [CommonModule],
  templateUrl: "./navigationmenu.component.html",
  styleUrls: ["./navigationmenu.component.css"],
  standalone: true,
})
export class NavigationMenuComponent {
  isMenuOpen: boolean = false;
  menuOptions: MenuOptions[] = [
    {
      value: "Youtube",
      route: "https://www.youtube.com/@brogrammers?sub_confirmation=1",
      svgSrc: "../../../assets/svg/social/youtube.svg",
    },
    {
      value: "Github",
      route: "https://github.com/dnyaneshwargiri",
      svgSrc: ".../../../assets/svg/social/github.svg",
    },
    {
      value: "Testimonials",
      route: "https://topmate.io/dnyaneshwar_giri#testimonials",
      svgSrc: "../../../assets/svg/projects.svg",
    },
  ];
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
