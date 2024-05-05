import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { MenuOptions } from "../../types/models";

@Component({
  selector: "sidemenu",
  imports: [CommonModule],
  templateUrl: "./sidemenu.component.html",
  styleUrls: ["./sidemenu.component.css"],
  standalone: true,
})
export class SidemenuComponent implements OnInit {
  constructor() {}
  isMenuOpen: boolean = false;
  menuOptions: MenuOptions[] = [
    {
      value: "Landing",
      route: "",
      svgSrc: "../../../assets/svg/home.svg",
    },
    {
      value: "Connect",
      route: "",
      svgSrc: "../../../assets/svg/connect.svg",
    },
    {
      value: "Projects",
      route: "",
      svgSrc: "../../../assets/svg/projects.svg",
    },
    {
      value: "Gallery",
      route: "",
      svgSrc: "../../../assets/svg/gallery.svg",
    },
    {
      value: "Experience",
      route: "",
      svgSrc: "../../../assets/svg/experience.svg",
    },
    {
      value: "Blog",
      route: "",
      svgSrc: "../../../assets/svg/blog.svg",
    },
  ];
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  ngOnInit() {}
}
