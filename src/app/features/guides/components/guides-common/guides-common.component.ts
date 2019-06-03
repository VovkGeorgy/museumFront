import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {Guide} from '../../../../core/models/entity-models';

@Component({
  selector: "app-guides",
  templateUrl: "./guides-common.component.html",
  styleUrls: ["./guides-common.component.css"]
})
export class GuidesCommonComponent implements OnInit {

  @Input()
  guides: Guide[];

  @Output()
  updateCLick = new EventEmitter();

  @Output()
  deleteCLick = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  updateClick(guide) {
    this.updateCLick.emit({guide: guide});
  }

  deleteClick(guide) {
    this.deleteCLick.emit({guide: guide});
  }
}
