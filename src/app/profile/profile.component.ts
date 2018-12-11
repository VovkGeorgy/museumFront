import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup} from "@angular/forms";
import {DataService} from "../service/data.service";
import {AuthService} from "../service/auth.service";
import {CookieService} from "ngx-cookie-service";
import {Router} from "@angular/router";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {

  visitorForm: FormGroup = new FormGroup({
    visitorId: new FormControl(""),
    username: new FormControl(""),
    password: new FormControl(""),
    fio: new FormControl(""),
    age: new FormControl(""),
    email: new FormControl(""),
  });
  guideForm: FormGroup = new FormGroup({
    guideId: new FormControl(""),
    username: new FormControl(""),
    password: new FormControl(""),
    fio: new FormControl(""),
    age: new FormControl(""),
    experience: new FormControl(""),
    languages: new FormControl(""),
    tourId: new FormControl("")
  });

  tempVisitor: any;
  tempGuide: any;
  getVisitorUrl = "/visitor/visitors/getByUsername";
  getGuideUrl = "/guide/guides/getByUsername";
  updateVisitorUrl = "/visitor/visitors/update/";
  updateGuideUrl = "/guide/guides/update/";
  display = "none";
  disabled = "";
  toursByVisitorId: any[any] = [];
  getAllVisitorToursUrl = "/visitor/tours/findAll/";
  favouriteVisitorTours: any[any] = [];
  showFavourites: boolean = false;


  constructor(private dataService: DataService,
              private authService: AuthService,
              private cookieService: CookieService,
              private router: Router) {
  }

  ngOnInit() {
    if (this.isAdmin()) {
      this.getGuideData();
    } else {
      this.getVisitorData();
    }
  }

  getVisitorData() {
    this.dataService.postData(this.getVisitorUrl, this.cookieService.get("username")).subscribe(data => {
      this.tempVisitor = data;
      this.visitorForm.setValue(this.tempVisitor);
      this.showFavourites = true;
      this.dataService.getData(this.getAllVisitorToursUrl + this.tempVisitor.visitorId)
        .subscribe(tours => {
          this.toursByVisitorId = tours;
          this.toursByVisitorId.forEach(elem => {
              this.favouriteVisitorTours.push(elem.tourByTourId);
            }
          );
        });
    });
  }

  getGuideData() {
    this.dataService.postData(this.getGuideUrl, this.cookieService.get("username")).subscribe(data => {
      this.tempGuide = data;
      this.guideForm.setValue(this.tempGuide);
    });
  }

  updateVisitorInBase() {
    let localVisitor = this.visitorForm.getRawValue();
    this.dataService.postData(this.updateVisitorUrl + localVisitor.visitorId, this.visitorForm.getRawValue())
      .subscribe(visitor => {
        this.tempVisitor = visitor;
        this.disabled = "disabled";
        this.display = "block";
      });
    this.visitorForm.reset();
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

  viewTour(tour) {
    this.router.navigate(["/tours/view", tour]);
  }


  isAdmin() {
    return this.authService.isAdmin();
  }
}
