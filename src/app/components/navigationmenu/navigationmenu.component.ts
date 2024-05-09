import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { MenuOptions } from "../../types/models";

@Component({
  selector: "navigation-menu",
  imports: [CommonModule],
  templateUrl: "./navigationmenu.component.html",
  styleUrls: ["./navigationmenu.component.css"],
  standalone: true,
})
export class NavigationMenuComponent implements OnInit {
  constructor() {}
  isMenuOpen: boolean = false;
  menuOptions: MenuOptions[] = [
    {
      value: "Youtube",
      route: "",
      svgSrc: "../../../assets/svg/social/youtube.svg",
    },
    {
      value: "Github",
      route: "",
      svgSrc: ".../../../assets/svg/social/github.svg",
    },
    {
      value: "Gallery",
      route: "",
      svgSrc: "../../../assets/svg/gallery.svg",
    },
    {
      value: "Testimonials",
      route: "",
      svgSrc: "../../../assets/svg/projects.svg",
    },
    {
      value: "Blogs",
      route: "",
      svgSrc: "../../../assets/svg/blog.svg",
    },
  ];
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  ngOnInit() {}
}
