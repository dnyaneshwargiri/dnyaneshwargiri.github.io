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
        key: "pintrest",
        value: "https://in.pinterest.com/dnyaneshwargir/",
        svgIcon: "../../../assets/svg/social/pinterest.svg",
      },
      {
        key: "medium",
        value: "https://medium.com/@dnyaneshwargiri510",
        svgIcon: "../../../assets/svg/social/medium.svg",
      },
    ],
    additionalText: "Contact me",
    contact: {
      address: "Dusseldörf, Germany",
      linkedIn: "https://www.linkedin.com/in/dnyaneshwargiri/",
    },
    portfolioGithubLink:
      "https://github.com/dnyaneshwargiri/dnyaneshwargiri.github.io",
    portfolioText: "Fork This Portfolio on Github",
  };
  ngOnInit() {}
}
