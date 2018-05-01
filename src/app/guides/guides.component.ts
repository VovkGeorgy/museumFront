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
    username: new FormControl(''),
    password: new FormControl(''),
    fio: new FormControl(''),
    age: new FormControl(''),
    experience: new FormControl(''),
    languages: new FormControl(''),
    tourId: new FormControl('')
  });
  getAllGuidesUrl = '/guide/guides';
  addGuideUrl = '/guide/guides/add';
  updateGuideUrl = '/guide/guides/update/';
  deleteGuideUrl = '/guide/guides/delete/';
  tempGuide: any;


  constructor(private dataService: DataService) {
  }

  addEntityToBase() {
    this.dataService.postData(this.addGuideUrl, this.guideForm.getRawValue())
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
    this.dataService.postData(this.updateGuideUrl + localGuide.guideId, this.guideForm.getRawValue())
      .subscribe(guide => {
        this.tempGuide = guide;
      });
    this.guideForm.reset();
    this.updateReadForm();
    this.updateTableIsHidden = false;
    this.updateFieldIsHidden = true;
  }

  deleteEntityInBase(guide) {
    this.dataService.postData(this.deleteGuideUrl + guide.guideId, guide)
      .subscribe(data => {
        this.tempGuide = data;
      });
    this.updateReadForm();
  }
}
