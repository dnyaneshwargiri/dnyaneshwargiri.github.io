import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { SectionTitleComponent } from "../widgets/section-title/section-title.component";

@Component({
  selector: "gallery",
  templateUrl: "./gallery.component.html",
  styleUrls: ["./gallery.component.css"],
  standalone: true,
  imports: [CommonModule, SectionTitleComponent],
})
export class GalleryComponent implements OnInit {
  constructor() {}
  title = "Gallery";

  imagesData: string[] = [
    "https://source.unsplash.com/8n7ipHhI8CI",
    "https://source.unsplash.com/IXYxqP4zejo",
    "https://source.unsplash.com/0zq6yuNk3L8",
    "https://source.unsplash.com/wBmWZZ7WS2U",
    "https://source.unsplash.com/rhVeNHHNbdk",
    "https://source.unsplash.com/Nsze2HlxoZo",
    "https://source.unsplash.com/VhcZyymbvpA",
    "https://source.unsplash.com/j5L0X1ioajw",
  ];
  ngOnInit() {}
}
