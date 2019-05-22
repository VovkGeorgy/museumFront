import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {TourService} from "../../../../core/services/entity/tour.service";
import {AuthService} from "../../../../core/services/auth.service";

@Component({
  selector: "app-tours-edit",
  templateUrl: "./tour-edit.component.html",
  styleUrls: ["./tour-edit.component.css"]
})
export class TourEditComponent implements OnInit {

  constructor(private router: Router,
              private route: ActivatedRoute,
              private tourService: TourService,
              private authService: AuthService) {
  }

  tour: any;
  exhibits: any;
  visitors: any;
  guide: any;
  tourForm: FormGroup = new FormGroup({
    tourId: new FormControl(""),
    theme: new FormControl(""),
    typeOfExhibits: new FormControl(""),
    duration: new FormControl(""),
    cost: new FormControl(""),
    imageUrl: new FormControl(""),
    guideEntity: new FormControl(""),
    exhibitEntityList: new FormControl(""),
    visitorEntitySet: new FormControl("")
  });

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.tourService.getTour(params.tourId).subscribe(tour => {
        this.tour = tour;
        this.tourService.getTourGuide(params.tourId).subscribe(guide => {
          this.tour.guideEntity = guide;
          this.guide = guide;
          this.tourService.getTourExhibits(params.tourId).subscribe(exhibits => {
            this.tour.exhibitEntityList = exhibits;
            this.exhibits = exhibits;
            this.tourService.getTourVisitors(params.tourId).subscribe(visitors => {
              this.tour.visitorEntitySet = visitors;
              this.visitors = visitors;
              this.tourForm.setValue(this.tour);
            });
          });
        });
      });
    });
  }

  updateTour() {
    let localTour = this.tourForm.getRawValue();
    this.tourService.updateTour(localTour.tourId, localTour)
      .subscribe(tour => {
        this.router.navigate(["/tours"]);
      });
  }

  removeVisitorFromTour(visitor: any) {
    this.tourService.removeVisitorFromTour(this.tour.tourId, visitor.visitorId).subscribe(data => {
      this.ngOnInit();
    });
  }

  viewExhibit(exhibit) {
    this.router.navigate(["/exhibits/view", {exhibitId: exhibit.exhibitId}]);
  }

  removeExhibitFromTour(exhibit: any) {
    this.tourService.removeExhibitFromTour(this.tour.tourId, exhibit.exhibitId).subscribe(data => {
      this.ngOnInit();
    });
  }

  removeGuideFromTour(guide: any) {
    this.tourService.removeGuideFromTour(this.tour.tourId, guide.guideId).subscribe(data => {
      this.ngOnInit();
    });
  }

  isAdmin() {
    return this.authService.isAdmin();
  }
}
