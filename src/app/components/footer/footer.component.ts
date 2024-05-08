import { Component, OnInit } from "@angular/core";
import { FooterData } from "../../types/models";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"],
  imports: [CommonModule],
  standalone: true,
})
export class FooterComponent implements OnInit {
  constructor() {}
  footerData: FooterData = {
    title: "Living | Working | Leveling Up",
    subTitle: "Once at a time",
    socials: [
      {
        key: "linkedin",
        value: "https://www.linkedin.com/in/dnyaneshwargiri/",
        svgIcon: "../../../assets/svg/social/linkedin.svg",
      },
      {
        key: "youtube",
        value: "https://www.youtube.com/@brogrammers",
        svgIcon: "../../../assets/svg/social/youtube.svg",
      },
      {
        key: "github",
        value: "https://github.com/dnyaneshwargiri",
        svgIcon: "../../../assets/svg/social/github.svg",
      },
      {
        key: "quora",
        value: "https://www.quora.com/profile/Dnyaneshwar-Giri-3",
        svgIcon: "../../../assets/svg/social/quora.svg",
      },
      {
        key: "medium",
        value: "https://medium.com/@dnyaneshwargiri510",
        svgIcon: "../../../assets/svg/social/medium.svg",
      },
    ],
    contact: {
      address: "Dusseldörf, Germany",
      linkedIn: "https://www.linkedin.com/in/dnyaneshwargiri/",
    },
  };
  ngOnInit() {}
}
