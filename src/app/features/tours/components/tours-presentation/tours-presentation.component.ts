import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {AuthService} from "../../../../core/services/auth.service";
import {TourService} from "../../services/tour.service";

@Component({
  selector: "app-tours",
  templateUrl: "./tours-presentation.component.html",
  styleUrls: ["./tours-presentation.component.css"]
})
export class ToursPresentationComponent implements OnInit {
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
    this.tourService.getTours().subscribe(tours => {
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
