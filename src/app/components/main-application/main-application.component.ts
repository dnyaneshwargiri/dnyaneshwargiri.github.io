import { Component, HostListener, OnInit } from "@angular/core";
import { ExperienceComponent } from "../experience/experience.component";
import { IntroductionComponent } from "../introduction/introduction.component";
import { TestimonialsComponent } from "../testimonials/testimonials.component";
import { GalleryComponent } from "../gallery/gallery.component";
import { MoreArrowDownComponent } from "../widgets/more-arrow-down/more-arrow-down.component";
import { ProjectsComponent } from "../projects/projects.component";

@Component({
  selector: "main-application",
  templateUrl: "./main-application.component.html",
  styleUrls: ["./main-application.component.css"],
  standalone: true,
  imports: [
    IntroductionComponent,
    ExperienceComponent,
    TestimonialsComponent,
    GalleryComponent,
    MoreArrowDownComponent,
    ProjectsComponent,
  ],
})
export class MainApplicationComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
