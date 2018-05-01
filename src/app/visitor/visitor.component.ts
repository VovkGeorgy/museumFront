import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {DataService} from "../service/data.service";

@Component({
  selector: 'app-visitor',
  templateUrl: './visitor.component.html',
  styleUrls: ['./visitor.component.css']
})
export class VisitorComponent implements OnInit {

  ngOnInit() {
    this.loadReadForm();
  }

  updateTableIsHidden = false;
  updateFieldIsHidden = true;
  visitors: any[any];
  tempVisitorKey: any;
  visitorForm: FormGroup = new FormGroup({
    visitorId: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl(''),
    fio: new FormControl(''),
    age: new FormControl(''),
    email: new FormControl(''),
  });
  getAllVisitorsUrl = '/visitor/visitors';
  addVisitorUrl = '/visitor/visitors/add';
  updateVisitorUrl = '/visitor/visitors/update/';
  deleteVisitorUrl = '/visitor/visitors/delete/';
  tempVisitor: any;


  constructor(private dataService: DataService) {
  }

  addEntityToBase() {
    this.dataService.postData(this.addVisitorUrl, this.visitorForm.getRawValue())
      .subscribe(visitor => {
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
    this.dataService.getData(this.getAllVisitorsUrl)
      .subscribe(visitors => {
        this.visitors = visitors;
      });
  }

  addUpdatedEntityToBase() {
    let localVisitor = this.visitorForm.getRawValue();
    this.dataService.postData(this.updateVisitorUrl + localVisitor.visitorId, this.visitorForm.getRawValue())
      .subscribe(visitor => {
        this.tempVisitor = visitor;
      });
    this.visitorForm.reset();
    this.updateTableIsHidden = false;
    this.updateFieldIsHidden = true;
    this.loadReadForm();
  }

  deleteEntityInBase(visitor) {
    this.dataService.postData(this.deleteVisitorUrl + visitor.visitorId, visitor)
      .subscribe(data => {
        this.tempVisitor = data;
      });
    this.loadReadForm();
  }

}
