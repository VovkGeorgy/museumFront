import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {CookieService} from "ngx-cookie-service";
import {AuthService} from "../../service/auth.service";
import {TourService} from "../../service/entity/tour.service";
import {VisitorService} from "../../service/entity/visitor.service";

@Component({
  selector: "app-tours-view",
  templateUrl: "./tours-view.component.html",
  styleUrls: ["./tours-view.component.css"]
})

export class ToursViewComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private visitorService: VisitorService,
              private authService: AuthService,
              private tourService: TourService,
              private cookieService: CookieService) {
  }

  tour: any;
  visitor: any;
  exhibitsById: any[any];
  isFavourite: boolean;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.tourService.getTour(params.tourId).subscribe(tour => {
        this.tour = tour;
        this.tourService.getTourExhibits(this.tour.tourId).subscribe(exhibits => {
          this.exhibitsById = exhibits;
        });
        if (this.isVisitor()) {
          this.visitorService.getVisitorByUsername(this.cookieService.get("username")).subscribe(data => {
            this.visitor = data;
            this.isTourInFavorites();
          });
        }
      });
    });
  }

  addToFavorites(tour) {
    this.visitorService.addTourToVisitor(this.tour.tourId, this.visitor.visitorId).subscribe(data => {
      this.isTourInFavorites();
    });
  }

  deleteFromFavorites(tour) {
    this.visitorService.removeTourFromVisitor(this.tour.tourId, this.visitor.visitorId).subscribe(data => {
      this.isTourInFavorites();
    });
  }

  isTourInFavorites() {
    this.visitorService.checkTourInFavourites(this.tour.tourId, this.visitor.visitorId).subscribe(data => {
      this.isFavourite = data as boolean;
    });
  }

  isVisitor() {
    return !this.authService.isGuide();
  }
}
