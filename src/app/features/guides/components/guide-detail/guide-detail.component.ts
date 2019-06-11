import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Guide, Tour} from "../../../../core/models/entity-models";

@Component({
  selector: "app-guide-detail",
  templateUrl: "./guide-detail.component.html",
  styleUrls: ["./guide-detail.component.css"]
})
export class GuideDetailComponent implements OnInit, OnDestroy {

  guideForm: FormGroup = new FormGroup({
    guideId: new FormControl(""),
    username: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required]),
    fio: new FormControl("", [Validators.required]),
    age: new FormControl("", [Validators.max(150), Validators.required]),
    experience: new FormControl("", [Validators.max(100), Validators.required]),
    languages: new FormControl(""),
    tourEntitySet: new FormControl([]),
  });

  @Input()
  toursWithoutGuide: Tour[];

  @Input()
  guide: Guide;

  @Input()
  isUpdateMode: boolean;

  @Output()
  saveClick = new EventEmitter();

  @Output()
  updateClick = new EventEmitter();

  @Output()
  goBackClick = new EventEmitter();

  @Output()
  viewTourClick = new EventEmitter();

  @Output()
  deleteTourClick = new EventEmitter();

  @Output()
  addTourClick = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
    if (this.isUpdateMode) {
      this.guideForm.setValue(this.guide);
    }
  }

  back() {
    this.goBackClick.emit();
  }

  save() {
    if (this.isUpdateMode) {
      this.updateClick.emit({guide: this.guideForm.getRawValue()});
    } else {
      this.saveClick.emit({guide: this.guideForm.getRawValue()});
    }
  }

  ngOnDestroy(): void {
    this.guideForm.reset();
  }

  viewTour(tour: Tour) {
    this.viewTourClick.emit({tourId: tour.tourId});
  }

  removeTourFromGuide(tour: Tour) {
    this.deleteTourClick.emit({tours: [tour]});
  }

  addTours(tour: Tour) {
    this.addTourClick.emit({tours: [tour]});
  }
}
