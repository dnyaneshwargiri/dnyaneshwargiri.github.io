import { Component } from "@angular/core";
import { Experience } from "../../types/models";
import { CommonModule } from "@angular/common";
import { SectionTitleComponent } from "../widgets/section-title/section-title.component";

@Component({
  selector: "experience",
  templateUrl: "./experience.component.html",
  styleUrls: ["./experience.component.css"],
  standalone: true,
  imports: [CommonModule, SectionTitleComponent],
})
export class ExperienceComponent {
  title = "Work";
  experiences: Experience[] = [
    {
      jobRole: "Senior Frontend Engineer",
      tenure: "2023-Present",
      company: "Foxbase GmbH",
      location: "Dusseldorf, Germany",
      jobDescription:
        "Developing a full stack solutions for digitizing a B2B sales for German market.",
    },
    {
      jobRole: "Technical Lead",
      tenure: "2022-2023",
      company: "KPIT",
      location: "Pune India",
      jobDescription:
        "Client- CLAAS Machinery GmbH. I developed the Frontend of Web app viz. Service Tester which is used to diagnose big harvesting machines. It saved manual checkup time for technicians by great extent. I used Highchart, RxJs, Tailwind, Material, Ng-translate to develop entire UI. There was special focus on code quality and test driven development .",
    },
    {
      jobRole: "Senior Software Engineer",
      tenure: "2022-2022",
      company: "Amdocs",
      location: "Pune India",
      jobDescription:
        "I was responsible for web applications development for telecommunication businesses using Angular, TypeScript, JavaScript.  Product 'LMOnline', client 'Bell Canada'- Developed the cross platform compatible web application using Web Components that can run Angular code in non-Angular environment.",
    },
    {
      jobRole: "Full Stack Engineer",
      tenure: "2019-2022",
      company: "SLB",
      location: "Pune India",
      jobDescription:
        "I was lead UI/UX expert in charge of developing solutions/ features for 3 different web applications in central data integration's team. Primarily worked on MEAN stack.",
    },
  ];
}
