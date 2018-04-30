import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DataService} from "../../service/data.service";

@Component({
  selector: 'app-tours-view',
  templateUrl: './tours-view.component.html',
  styleUrls: ['./tours-view.component.css']
})
export class ToursViewComponent implements OnInit {

  constructor(private router: Router,
              private route: ActivatedRoute,
              private dataService: DataService) {
  }

  tour: any;
  exhibits: any[any];
  exhibitsById: any[any] = [];
  getAllTourExhibitsUrl = '/tour/exhibits/';


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.tour = params;
      // console.log(params);
      // console.log(this.tour);
      // this.tourForm.setValue(this.tour);
      this.dataService.getData(this.getAllTourExhibitsUrl + this.tour.tourId)
        .subscribe(exhibits => {
          console.log(exhibits);
          this.exhibits = exhibits;
          this.exhibits.forEach(elem => {
              this.exhibitsById.push(elem.exhibitByExhibitId);
            }
          );
          console.log(this.exhibitsById);
        });
    });
  }

}
