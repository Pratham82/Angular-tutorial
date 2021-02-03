import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "mw-media-item",
  templateUrl: "./media-item.component.html",
  styleUrls: ["./media-item.component.css"],
})
export class MediaItemComponent {
  name = "The Redemption";

  @Input() mediaItem;

  // Here we are creating our own event like DOM
  @Output() delete = new EventEmitter();

  wasWatched() {
    return true;
  }

  doneThis = () => false;

  deleteThis = () => {
    console.log("deleteThis clicked");
    this.delete.emit(this.mediaItem);
  };
}
