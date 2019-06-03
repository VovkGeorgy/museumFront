import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Visitor} from "../../../../core/models/entity-models";

@Component({
  selector: "app-visitor-detail",
  templateUrl: "./visitor-detail.component.html",
  styleUrls: ["./visitor-detail.component.css"]
})
export class VisitorDetailComponent implements OnInit {

  visitorForm: FormGroup = new FormGroup({
    visitorId: new FormControl(""),
    username: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required]),
    fio: new FormControl("", [Validators.required]),
    age: new FormControl("", [Validators.max(150), Validators.required]),
    email: new FormControl("", [Validators.required]),
    tourEntitySet: new FormControl(""),
  });

  @Input()
  isUpdateMode: boolean;

  @Input()
  updatingVisitor: Visitor;

  @Output()
  saveClick = new EventEmitter();

  @Output()
  backClick = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
    this.visitorForm.setValue(this.updatingVisitor);
  }

  onBackClick() {
    this.backClick.emit();
  }

  onSaveClick() {
    this.saveClick.emit({visitor: this.visitorForm.getRawValue()});
    this.backClick.emit();
  }
}
