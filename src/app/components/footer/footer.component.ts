import { Component, ChangeDetectionStrategy } from "@angular/core";
import { FooterData } from "../../types/models";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
})
export class FooterComponent {
  footerData: FooterData = {
    title: "Living | Working | Leveling Up",
    subTitle: "Need help? I'm available :)",

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
    ],
    additionalText: "Contact me",
    contact: {
      address: "Dusseldörf, Germany",
      linkedIn: "https://www.linkedin.com/in/dnyaneshwargiri/",
    },
    portfolioGithubLink:
      "https://github.com/dnyaneshwargiri/dnyaneshwargiri.github.io/tree/main",
    portfolioText: "Fork This Portfolio on Github",
  };
}
