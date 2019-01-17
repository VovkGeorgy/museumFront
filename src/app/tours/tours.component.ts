import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {AuthService} from "../service/auth.service";
import {TourService} from "../service/entity/tour.service";

@Component({
  selector: "app-tours",
  templateUrl: "./tours.component.html",
  styleUrls: ["./tours.component.css"]
})
export class ToursComponent implements OnInit {
  tours: any[any];
  tourId: number;

  constructor(private tourService: TourService,
              private authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {
    this.updateReadForm();
  }

  updateReadForm() {
    this.tourService.getAllTours().subscribe(tours => {
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
