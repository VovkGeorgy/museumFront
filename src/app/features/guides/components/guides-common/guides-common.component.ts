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
    // this.updateFieldIsHidden = false;
    // this.updateTableIsHidden = true;
    // this.guideForm.setValue(guide);
    // this.tempGuideKey = guide.$key;
  }

  updateReadForm() {
    // this.guideService.getAllGuides().subscribe(guides => {
    //   this.guides = guides;
    // });
  }

  addUpdatedEntityToBase() {

  }

  deleteClick(guide) {
    this.deleteCLick.emit({guide: guide});
    // this.guideService.deleteGuide(guide.guideId).subscribe(data => {
    //   this.tempGuide = data;
    // });
    // this.updateReadForm();
  }
}
