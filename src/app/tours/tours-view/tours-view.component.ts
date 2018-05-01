import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DataService} from "../../service/data.service";

@Component({
  selector: 'app-tours-view',
  templateUrl: './tours-view.component.html',
  styleUrls: ['./tours-view.component.css']
})

export class ToursViewComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private dataService: DataService) {
  }

  tour: any;
  exhibitsOfCurrentTour: any[any];
  exhibitsById: any[any] = [];
  getAllTourExhibitsUrl = '/tour/exhibits/';


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
    });
  }

  // deleteExhibitOfTour(exhibit) {
  // console.log(this.tour.tourId);
  // console.log(exhibit.exhibitId);
  // let obj = {
  //   'tourId': this.tour.tourId,
  //   'exhibitId': exhibit.exhibitId
  // };
  // this.dataService.postData(this.test, obj).subscribe(no => {
  //   console.log('postData');
  //
  // this.exhibitsOfCurrentTour.forEach(elem => {
  // if (elem.exhibitId == exhibit.exhibitId) {
  //   let ind = this.exhibitsOfCurrentTour.indexOf(elem);
  //   this.exhibitsOfCurrentTour.splice(ind, 1);
  // }
  // });
  // let obj = {
  // 'tourId': this.tour.tourId,
  // 'tourId': 1,
  // 'exhibitId': exhibit.exhibitId
  // 'exhibitId': 10
  // };
  // console.log(this.exhibitsOfCurrentTour);
  // this.dataService.postData(this.test + this.tour.tourId, this.exhibitsOfCurrentTour).subscribe(no => {
  //   console.log('get in postData');
  //   console.log(no);
  // }
//
// );
// }

}
