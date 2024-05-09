import { Component, OnInit } from "@angular/core";
import { Testimonial } from "../../types/models";
import { CommonModule } from "@angular/common";
import { SectionTitleComponent } from "../widgets/section-title/section-title.component";

@Component({
  selector: "testimonials",
  templateUrl: "./testimonials.component.html",
  styleUrls: ["./testimonials.component.css"],
  standalone: true,
  imports: [CommonModule, SectionTitleComponent],
})
export class TestimonialsComponent implements OnInit {
  constructor() {}

  title = "Testimonials";
  subTitle = " Here are what people saying ...";
  testimonials: Testimonial[] = [
    {
      message:
        "Dnyaneshwar is an Extraordinary, hardworking , intelligent, sincere & polite person . He is truly a good listener... I have never seen such a down to earth student in my entire career as a teacher . So proud of him ",
      personName: " Prof. Abhilasha Kulkarni",
      personDesignation: "ML & Data Analytics. Pune University",
      imageUrl: "../../../assets/svg/testimonials/female.svg",
    },
    {
      message:
        "Academically very well acomplished. Excellent in Web developement and good team member.",
      personName: "Amar Pandit ",
      personDesignation: "IT Strategic Consultant @ Deloitte UAE",
      imageUrl: "../../../assets/svg/testimonials/male.svg",
    },
  ];
  ngOnInit() {}
}
