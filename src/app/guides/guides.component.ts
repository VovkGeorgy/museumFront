import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {DataService} from "../service/data.service";

@Component({
  selector: 'app-guides',
  templateUrl: './guides.component.html',
  styleUrls: ['./guides.component.css']
})
export class GuidesComponent implements OnInit {

  ngOnInit() {
    this.updateReadForm();
  }

  updateTableIsHidden = false;
  updateFieldIsHidden = true;
  guides: any[any];
  tempGuideKey: any;
  guideForm: FormGroup = new FormGroup({
    guideId: new FormControl(''),
    fio: new FormControl(''),
    age: new FormControl(''),
    experience: new FormControl(''),
    languages: new FormControl(''),
    tourId: new FormControl('')
  });
  getAllGuidesUrl = 'http://localhost:8090/guide/guides';
  addGuideUrl = 'http://localhost:8090/guide/guides/add';
  updateGuideUrl = 'http://localhost:8090/guide/guides/update/';
  deleteGuideUrl = 'http://localhost:8090/guide/guides/delete/';
  tempGuide: any;


  constructor(private dataService: DataService) {
  }

  addEntityToBase() {
    this.dataService.addData(this.addGuideUrl, this.guideForm.getRawValue())
      .subscribe(guide => {
        this.tempGuide = guide;
      });
    this.guideForm.reset();
  }

  loadUpdatedForm(guide) {
    this.updateFieldIsHidden = false;
    this.updateTableIsHidden = true;
    this.guideForm.setValue(guide);
    this.tempGuideKey = guide.$key;
  }

  updateReadForm() {
    this.dataService.getData(this.getAllGuidesUrl)
      .subscribe(guides => {
        this.guides = guides;
      });
  }

  addUpdatedEntityToBase() {
    let localGuide = this.guideForm.getRawValue();
    this.dataService.addData(this.updateGuideUrl + localGuide.guideId, this.guideForm.getRawValue())
      .subscribe(guide => {
        this.tempGuide = guide;
      });
    this.guideForm.reset();
    this.updateReadForm();
    this.updateTableIsHidden = false;
    this.updateFieldIsHidden = true;
  }

  deleteEntityInBase(guide) {
    this.dataService.deleteData(this.deleteGuideUrl + guide.guideId, guide)
      .subscribe(data => {
        this.tempGuide = data;
      });
    this.updateReadForm();
  }
}
