import { Component } from "@angular/core";

@Component({
  selector: "introduction",
  templateUrl: "./introduction.component.html",
  styleUrls: ["./introduction.component.css"],
  standalone: true,
})
export class IntroductionComponent {
  title = "Hi I'm Dnyaneshwar Giri";
  introParagraph =
    "Software Engineer by Profession who belives in law of Procastination ;) Looking at my experience I've done quite a lot work in Web Development especially Frontend Stuff but I belive in theory of being Universal Developer (slaying whatever shit comes a way). Apart I'm Pragmatic individual with never ending little drive inside me. ";

  introductionSectionConnectText = "Connect with me on";

  gotoLinkedIn() {
    window.open("https://www.linkedin.com/in/dnyaneshwargiri/", "_blank");
  }
}
