import { CommonModule } from "@angular/common";
import {
  Component,
  HostListener,
  ChangeDetectionStrategy,
} from "@angular/core";

@Component({
  selector: "more-arrow-down",
  templateUrl: "./more-arrow-down.component.html",
  styleUrls: ["./more-arrow-down.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
})
export class MoreArrowDownComponent {
  showScrollArrow: boolean = true;

  @HostListener("window:scroll", [])
  onWindowScroll() {
    if (window.scrollY === 0) {
      this.showScrollArrow = true;
    } else {
      this.showScrollArrow = false;
    }
  }

  scrollToBottom() {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  }
}
