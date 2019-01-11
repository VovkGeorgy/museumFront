import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup} from "@angular/forms";
import {CookieService} from "ngx-cookie-service";
import {AuthService} from "../../service/auth.service";
import {DataService} from "../../service/data.service";
import {Router} from "@angular/router";

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
  getGuideUrl = "/guide/guides/getByUsername";
  updateGuideUrl = "/guide/guides/update/";
  display = "none";
  disabled = "";

  constructor(private dataService: DataService,
              private authService: AuthService,
              private cookieService: CookieService,
              private router: Router) {
  }

  ngOnInit() {
    this.getGuideData();
  }

  getGuideData() {
    this.dataService.postData(this.getGuideUrl, this.cookieService.get("username")).subscribe(data => {
      this.tempGuide = data;
      this.guideForm.setValue(this.tempGuide);
      this.guideTours = this.tempGuide.tourEntitySet;
    });
  }

  updateGuideInBase() {
    let localGuide = this.guideForm.getRawValue();
    this.dataService.postData(this.updateGuideUrl + localGuide.guideId, this.guideForm.getRawValue())
      .subscribe(guide => {
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
