import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup} from "@angular/forms";
import {AuthService} from "../../../../core/services/auth.service";
import {Router} from "@angular/router";
import {GuidesService} from "../../../guides/services/guides.service";

@Component({
  selector: "app-guide-profile",
  templateUrl: "./guide-profile.component.html",
  styleUrls: ["./guide-profile.component.css"]
})
export class GuideProfileComponent implements OnInit {

  guideForm: FormGroup = new FormGroup({
    guideId: new FormControl(""),
    username: new FormControl(""),
    password: new FormControl(""),
    fio: new FormControl(""),
    age: new FormControl(""),
    experience: new FormControl(""),
    languages: new FormControl(""),
    tourEntitySet: new FormControl("")
  });
  tempGuide: any[any];
  guideTours: any[any] = [];
  display = "none";
  disabled = "";

  constructor(private guideService: GuidesService,
              private authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {
    this.getGuideData();
  }

  getGuideData() {
    this.guideService.getGuideByUsername(localStorage.getItem("username")).subscribe(data => {
      this.tempGuide = data;
      this.guideForm.setValue(this.tempGuide);
      this.guideTours = this.tempGuide.tourEntitySet;
    });
  }

  updateGuideInBase() {
    this.guideService.updateGuide(this.guideForm.getRawValue()).subscribe(guide => {
      this.tempGuide = guide;
      this.disabled = "disabled";
      this.display = "block";
    });
    this.guideForm.reset();
  }

  closeModal() {
    this.display = "none";
    this.ngOnInit();
  }

  isGuide() {
    return this.authService.isGuide();
  }

  viewTour(tour) {
    this.router.navigate(["/tours/view", {tourId: tour.tourId}]);
  }
}
