import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup} from "@angular/forms";
import {CookieService} from "ngx-cookie-service";
import {Router} from "@angular/router";
import {VisitorService} from "../../../../core/services/entity/visitor.service";

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
  display = "none";
  disabled = "";
  favouriteVisitorTours: any[any] = [];

  constructor(private visitorService: VisitorService,
              private cookieService: CookieService,
              private router: Router) {
  }

  ngOnInit() {
    this.getVisitorData();
  }

  getVisitorData() {
    this.visitorService.getVisitorByUsername(this.cookieService.get("username")).subscribe(data => {
      this.visitor = data;
      this.visitorForm.setValue(this.visitor);
      this.favouriteVisitorTours = this.visitor.tourEntitySet;
    });
  }

  updateVisitorInBase() {
    let localVisitor = this.visitorForm.getRawValue();
    this.visitorService.updateVisitor(localVisitor.visitorId, localVisitor).subscribe(visitor => {
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
    this.visitorService.removeTourFromVisitor(tour.tourId, this.visitor.visitorId).subscribe(data => {
      this.ngOnInit();
    });
  }
}
