import {Component, OnInit} from "@angular/core";
import {DataService} from "../service/data.service";
import {Router} from "@angular/router";
import {AuthService} from "../service/auth.service";

@Component({
  selector: "app-tours",
  templateUrl: "./tours.component.html",
  styleUrls: ["./tours.component.css"]
})
export class ToursComponent implements OnInit {
  tours: any[any];
  tourId: number;

  getAllToursUrl = "/tour/tours";

  constructor(private dataService: DataService,
              private authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {
    this.updateReadForm();
  }

  updateReadForm() {
    this.dataService.getData(this.getAllToursUrl)
      .subscribe(tours => {
        this.tours = tours;
      });
  }

  editTour(tour) {
    this.router.navigate(["/tours/edit", {tourId: tour.tourId}]);
  }

  viewTour(tour) {
    this.router.navigate(["/tours/view", {tourId: tour.tourId}]);
  }

  isGuide() {
    return this.authService.isGuide();
  }
}
