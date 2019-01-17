import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup} from "@angular/forms";
import {DataService} from "../../service/data.service";
import {CookieService} from "ngx-cookie-service";
import {Router} from "@angular/router";

@Component({
  selector: "app-visitor-profile",
  templateUrl: "./visitor-profile.component.html",
  styleUrls: ["./visitor-profile.component.css"]
})
export class VisitorProfileComponent implements OnInit {

  visitorForm: FormGroup = new FormGroup({
    visitorId: new FormControl(""),
    username: new FormControl(""),
    password: new FormControl(""),
    fio: new FormControl(""),
    age: new FormControl(""),
    email: new FormControl(""),
    tourEntitySet: new FormControl("")
  });
  visitor: any[any];
  getVisitorUrl = "/visitor/visitors/getByUsername";
  updateVisitorUrl = "/visitor/visitors/update/";
  removeTourFromVisitorUrl = "/visitor/visitors/removeTour";
  display = "none";
  disabled = "";
  favouriteVisitorTours: any[any] = [];

  constructor(private dataService: DataService,
              private cookieService: CookieService,
              private router: Router) {
  }

  ngOnInit() {
    this.getVisitorData();
  }

  getVisitorData() {
    this.dataService.postData(this.getVisitorUrl, this.cookieService.get("username")).subscribe(data => {
      this.visitor = data;
      this.visitorForm.setValue(this.visitor);
      this.favouriteVisitorTours = this.visitor.tourEntitySet;
    });
  }

  updateVisitorInBase() {
    let localVisitor = this.visitorForm.getRawValue();
    this.dataService.postData(this.updateVisitorUrl + localVisitor.visitorId, localVisitor)
      .subscribe(visitor => {
        this.visitor = visitor;
        this.disabled = "disabled";
        this.display = "block";
      });
    this.visitorForm.reset();
  }

  closeModal() {
    this.display = "none";
    this.ngOnInit();
  }

  viewTour(tour) {
    this.router.navigate(["/tours/view", tour]);
  }

  deleteFromFavorites(tour) {
    const tempTVObj = {
      "tourId": tour.tourId,
      "visitorId": this.visitor.visitorId,
    };
    this.dataService.postData(this.removeTourFromVisitorUrl, tempTVObj).subscribe(data => {
      this.ngOnInit();
    });
  }

}
