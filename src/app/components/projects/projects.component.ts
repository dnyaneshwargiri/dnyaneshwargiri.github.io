import { Component, OnInit, Renderer2 } from "@angular/core";
import { SectionTitleComponent } from "../widgets/section-title/section-title.component";

@Component({
  selector: "projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.css"],
  standalone: true,
  imports: [SectionTitleComponent],
})
export class ProjectsComponent implements OnInit {
  constructor(private renderer: Renderer2) {}
  ngOnInit() {
    this.runScript();
  }

  runScript(): void {
    const script = this.renderer.createElement("script");
    script.src =
      "https://github.com/dnyaneshwargiri/dnyaneshwargiri.github.io/blob/master/js/script.js";
    this.renderer.appendChild(document.body, script);

    script.onload = () => {
      console.log("Script loaded successfully");
      console.log("i got called");

      const GITHUB_USER = "dnyaneshwargiri";
      const GITHUB_URL = "https://api.github.com/users/";
    };

    script.onerror = (error: Error) => {
      console.error("Error loading script:", error);
    };
  }
}
