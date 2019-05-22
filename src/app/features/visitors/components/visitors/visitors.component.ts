import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup} from "@angular/forms";
import {VisitorService} from "../../../../core/services/entity/visitor.service";

@Component({
  selector: "app-visitor",
  templateUrl: "./visitors.component.html",
  styleUrls: ["./visitors.component.css"]
})
export class VisitorsComponent implements OnInit {

  ngOnInit() {
    this.loadReadForm();
  }

  updateTableIsHidden = false;
  updateFieldIsHidden = true;
  visitors: any[any];
  tempVisitorKey: any;
  visitorForm: FormGroup = new FormGroup({
    visitorId: new FormControl(""),
    username: new FormControl(""),
    password: new FormControl(""),
    fio: new FormControl(""),
    age: new FormControl(""),
    email: new FormControl(""),
  });
  tempVisitor: any;


  constructor(private visitorService: VisitorService) {
  }

  addEntityToBase() {
    this.visitorService.addVisitor(this.visitorForm.getRawValue()).subscribe(visitor => {
      this.tempVisitor = visitor;
    });
    this.visitorForm.reset();
    this.loadReadForm();
  }

  loadUpdateForm(visitor) {
    this.updateFieldIsHidden = false;
    this.updateTableIsHidden = true;
    this.visitorForm.setValue(visitor);
    this.tempVisitorKey = visitor.$key;
  }

  loadReadForm() {
    this.visitorService.getAllVisitors().subscribe(visitors => {
      this.visitors = visitors;
    });
  }

  addUpdatedEntityToBase() {
    let localVisitor = this.visitorForm.getRawValue();
    this.visitorService.updateVisitor(localVisitor.visitorId, this.visitorForm.getRawValue()).subscribe(visitor => {
      this.tempVisitor = visitor;
    });
    this.visitorForm.reset();
    this.updateTableIsHidden = false;
    this.updateFieldIsHidden = true;
    this.loadReadForm();
  }

  deleteEntityInBase(visitor) {
    this.visitorService.deleteVisitor(visitor.visitorId, visitor).subscribe(data => {
      this.tempVisitor = data;
    });
    this.loadReadForm();
  }
}
