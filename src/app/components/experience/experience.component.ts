import { Component, OnInit } from "@angular/core";
import { Experience } from "../../types/models";
import { CommonModule } from "@angular/common";
import { LinkedinService } from "../../services/linkedin.service";

@Component({
  selector: "experience",
  templateUrl: "./experience.component.html",
  styleUrls: ["./experience.component.css"],
  standalone: true,
  imports: [CommonModule],
})
export class ExperienceComponent implements OnInit {
  constructor(private linkedinService: LinkedinService) {}

  title = "Work";
  experiences: Experience[] = [
    {
      jobRole: "Web Developer",
      tenure: "2019-2022",
      company: "SLB",
      location: "Pune India",
      jobDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula.",
    },
    {
      jobRole: "Web Developer",
      tenure: "2019-2022",
      company: "SLB",
      location: "Pune India",
      jobDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula.",
    },
    {
      jobRole: "Web Developer",
      tenure: "2019-2022",
      company: "SLB",
      location: "Pune India",
      jobDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula.",
    },
  ];
  ngOnInit() {
    // this.getLinkedInExperience();
  }

  getLinkedInExperience() {
    this.linkedinService.getProfile().subscribe(
      (data: any) => {
        console.log("data", data);
      },
      (error) => {
        console.error("Error fetching work history:", error);
      },
    );
  }
}
