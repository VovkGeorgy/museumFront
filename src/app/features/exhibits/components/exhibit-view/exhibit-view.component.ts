import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {ExhibitsService} from "../../services/exhibits.service";

@Component({
  selector: "app-exhibits-view",
  templateUrl: "./exhibit-view.component.html",
  styleUrls: ["./exhibit-view.component.css"]
})
export class ExhibitViewComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private router: Router,
              private exhibitService: ExhibitsService) {
  }

  exhibit: any;
  tours: any[any];

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.exhibitService.getExhibit(params.exhibitId).subscribe(exhibit => {
        this.exhibit = exhibit;
        this.exhibitService.getAllExhibitTours(params.exhibitId)
          .subscribe(tours => {
            this.tours = tours;
          });
      });
    });
  }

  viewTour(tour) {
    this.router.navigate(["/tours/view", {tourId: tour.tourId}]);
  }
}
