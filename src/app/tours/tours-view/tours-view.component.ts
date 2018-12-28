import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {DataService} from "../../service/data.service";
import {CookieService} from "ngx-cookie-service";
import {AuthService} from "../../service/auth.service";

@Component({
  selector: "app-tours-view",
  templateUrl: "./tours-view.component.html",
  styleUrls: ["./tours-view.component.css"]
})

export class ToursViewComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private authService: AuthService,
              private dataService: DataService,
              private cookieService: CookieService) {
  }

  tour: any;
  visitor: any;
  exhibitsById: any[any];
  isFavourite: boolean;
  getAllTourExhibitsUrl = "/tour/exhibits/";
  getVisitorUrl = "/visitor/visitors/getByUsername";
  addTourToVisitorUrl = "/visitor/visitors/addTour";
  removeTourFromVisitorUrl = "/visitor/visitors/removeTour";
  checkTourFromVisitorUrl = "/visitor/toursCheck";


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.tour = params;
      this.dataService.getData(this.getAllTourExhibitsUrl + this.tour.tourId)
        .subscribe(exhibits => {
          this.exhibitsById = exhibits;
        });
      this.dataService.postData(this.getVisitorUrl, this.cookieService.get("username")).subscribe(data => {
        this.visitor = data;
        this.isTourInFavorites();
      });
    });
  }

  addToFavorites(tour) {
    const idObject = {
      "tourId": this.tour.tourId,
      "visitorId": this.visitor.visitorId,
    };
    this.dataService.postData(this.addTourToVisitorUrl, idObject).subscribe(data => {
      this.isTourInFavorites();
    });
  }

  deleteFromFavorites(tour) {
    const tempTVObj = {
      "tourId": this.tour.tourId,
      "visitorId": this.visitor.visitorId,
    };
    console.log(tempTVObj);
    this.dataService.postData(this.removeTourFromVisitorUrl, tempTVObj).subscribe(data => {
      this.isTourInFavorites();
    });
  }

  isTourInFavorites() {
    const tempTVObj = {
      "tourId": this.tour.tourId,
      "visitorId": this.visitor.visitorId,
    };
    this.dataService.postData(this.checkTourFromVisitorUrl, tempTVObj).subscribe(data => {
      this.isFavourite = data as boolean;
    });
  }

  isVisitor() {
    return !this.authService.isGuide();
  }
}
