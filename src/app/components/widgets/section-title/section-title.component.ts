import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "section-title",
  templateUrl: "./section-title.component.html",
  styleUrls: ["./section-title.component.css"],
  standalone: true,
})
export class SectionTitleComponent implements OnInit {
  constructor() {}
  @Input() title: string = "";
  ngOnInit() {}
}
