import { Component, ChangeDetectionStrategy } from "@angular/core";
import { ExperienceComponent } from "../experience/experience.component";
import { IntroductionComponent } from "../introduction/introduction.component";
import { TestimonialsComponent } from "../testimonials/testimonials.component";
import { MoreArrowDownComponent } from "../widgets/more-arrow-down/more-arrow-down.component";

@Component({
  selector: "main-application",
  templateUrl: "./main-application.component.html",
  styleUrls: ["./main-application.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    IntroductionComponent,
    ExperienceComponent,
    TestimonialsComponent,
    MoreArrowDownComponent,
  ],
})
export class MainApplicationComponent {}
