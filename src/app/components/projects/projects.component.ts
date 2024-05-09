import { Component, OnInit } from "@angular/core";
import { SectionTitleComponent } from "../widgets/section-title/section-title.component";

@Component({
  selector: "projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.css"],
  standalone: true,
  imports: [SectionTitleComponent],
})
export class ProjectsComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}
