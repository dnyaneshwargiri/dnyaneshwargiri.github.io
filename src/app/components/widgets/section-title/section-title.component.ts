import { Component, Input, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-section-title",
  templateUrl: "./section-title.component.html",
  styleUrls: ["./section-title.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class SectionTitleComponent {
  @Input() title: string = "";
}
