import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Guide} from '../../../../core/models/entity-models';

@Component({
  selector: 'app-guide-detail',
  templateUrl: './guide-detail.component.html',
  styleUrls: ['./guide-detail.component.css']
})
export class GuideDetailComponent implements OnInit {

  guideForm: FormGroup = new FormGroup({
    guideId: new FormControl(""),
    username: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required]),
    fio: new FormControl("", [Validators.required]),
    age: new FormControl("", [Validators.max(150), Validators.required]),
    experience: new FormControl("", [Validators.required]),
    languages: new FormControl(""),
    tourEntitySet: new FormControl(""),
  });

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

  constructor() {
  }

  ngOnInit() {
    if (this.isUpdateMode) {
      this.guideForm.setValue(this.guide);
    } else {
      this.guideForm.reset();
    }
  }

  back() {
    this.guideForm.reset();
    this.goBackClick.emit();
  }

  save() {
    if (this.isUpdateMode) {
      this.updateClick.emit({guide: this.guideForm.getRawValue()});
    } else {
      this.saveClick.emit({guide: this.guideForm.getRawValue()});
    }
    this.guideForm.reset();
  }


}
