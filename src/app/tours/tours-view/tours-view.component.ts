import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {DataService} from "../../service/data.service";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: "app-tours-view",
  templateUrl: "./tours-view.component.html",
  styleUrls: ["./tours-view.component.css"]
})

export class ToursViewComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private dataService: DataService,
              private cookieService: CookieService) {
  }

  tour: any;
  visitor: any;
  exhibitsOfCurrentTour: any[any];
  exhibitsById: any[any] = [];
  isFavourite : boolean;
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
          this.exhibitsOfCurrentTour = exhibits;
          this.exhibitsOfCurrentTour.forEach(elem => {
              this.exhibitsById.push(elem.exhibitByExhibitId);
            }
          );
        });
      this.dataService.postData(this.getVisitorUrl, this.cookieService.get("username")).subscribe(data => {
        this.visitor = data;
        this.checkToFavorites();
      });
    });
  }

  addToFavorites(tour) {
    const idObject = {
      "tourId": tour.tourId,
      "visitorId": this.visitor.visitorId,
    };
    console.log(idObject);
    this.dataService.postData(this.addTourToVisitorUrl, idObject).subscribe(data => {
      console.log("addTourToVisitor");
      this.checkToFavorites();
    });
  }

  deleteFromFavorites(tour) {
    const tempTVObj = {
      "tourId": tour.tourId,
      "visitorId": this.visitor.visitorId,
    };
    console.log(tempTVObj);
    this.dataService.postData(this.removeTourFromVisitorUrl, tempTVObj).subscribe(data => {
      console.log("RemoveTourFromVisitor");
      this.checkToFavorites();
    });
  }

  checkToFavorites(){
    console.log(this.tour.tourId);
    console.log(this.visitor.visitorId);
    const tempTVObj = {
      "tourId": this.tour.tourId,
      "visitorId": this.visitor.visitorId,
    };
    this.dataService.postData(this.checkTourFromVisitorUrl, tempTVObj).subscribe(data => {
      console.log(data);
      this.isFavourite = data as boolean;
    });
  }
}
