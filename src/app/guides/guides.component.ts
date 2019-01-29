import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup} from "@angular/forms";
import {GuidesService} from "../service/entity/guides.service";

@Component({
  selector: "app-guides",
  templateUrl: "./guides.component.html",
  styleUrls: ["./guides.component.css"]
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
    guideId: new FormControl(""),
    username: new FormControl(""),
    password: new FormControl(""),
    fio: new FormControl(""),
    age: new FormControl(""),
    experience: new FormControl(""),
    languages: new FormControl(""),
  });
  tempGuide: any;

  constructor(private guideService: GuidesService) {
  }

  addEntityToBase() {
    this.guideService.addGuide(this.guideForm.getRawValue()).subscribe(guide => {
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
    this.guideService.getAllGuides().subscribe(guides => {
      this.guides = guides;
    });
  }

  addUpdatedEntityToBase() {
    let localGuide = this.guideForm.getRawValue();
    this.guideService.updateGuide(localGuide.guideId, this.guideForm.getRawValue()).subscribe(guide => {
      this.tempGuide = guide;
    });
    this.guideForm.reset();
    this.updateReadForm();
    this.updateTableIsHidden = false;
    this.updateFieldIsHidden = true;
  }

  deleteEntityInBase(guide) {
    this.guideService.deleteGuide(guide.guideId).subscribe(data => {
      this.tempGuide = data;
    });
    this.updateReadForm();
  }
}
