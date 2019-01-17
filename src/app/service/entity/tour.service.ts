import {Injectable} from "@angular/core";
import {DataService} from "../data.service";

@Injectable()
export class TourService {

  constructor(private dataService: DataService) {
  }

  private getTourGuideUrl = "/tour/tours/guide/";
  private getTourUrl = "/tour/tours/";
  private updateTourUrl = "/tour/tours/update/";
  private getAllToursUrl = "/tour/tours";
  private getAllTourExhibitsUrl = "/tour/exhibits/";


  getTour(id: number) {
    return this.dataService.getData(this.getTourUrl + id);
  }

  getTourGuide(id: number) {
    return this.dataService.getData(this.getTourGuideUrl + id);
  }

  updateTour(id: number, tour: any) {
    return this.dataService.postData(this.updateTourUrl + id, tour);
  }

  getAllTours() {
    return this.dataService.getData(this.getAllToursUrl);
  }

  getAllTourExhibits(id: number) {
    return this.dataService.getData(this.getAllTourExhibitsUrl + id);
  }
}
