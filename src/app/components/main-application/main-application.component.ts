import { Component, OnInit } from "@angular/core";
import { ExperienceComponent } from "../experience/experience.component";
import { IntroductionComponent } from "../introduction/introduction.component";
import { TestimonialsComponent } from "../testimonials/testimonials.component";
import { GalleryComponent } from "../gallery/gallery.component";

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
  ],
})
export class MainApplicationComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
