import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {DataService} from "../../service/data.service";

@Component({
  selector: "app-exhibits-view",
  templateUrl: "./exhibits-view.component.html",
  styleUrls: ["./exhibits-view.component.css"]
})
export class ExhibitsViewComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private dataService: DataService) {
  }

  exhibit: any;
  tours: any[any];
  getAllExhibitToursUrl = "/exhibit/exhibits/tours/";
  getExhibitUrl = "/exhibit/exhibits/";

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.dataService.getData(this.getExhibitUrl + params.exhibitId).subscribe(exhibit => {
        this.exhibit = exhibit;
        this.dataService.getData(this.getAllExhibitToursUrl + params.exhibitId)
          .subscribe(tours => {
            this.tours = tours;
          });
      });
    });
  }
}
