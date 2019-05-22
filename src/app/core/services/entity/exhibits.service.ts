import {Injectable} from "@angular/core";
import {DataService} from "../data.service";
import {catchError, map} from "rxjs/operators";
import {Exhibit} from "../../models/entity-models";

@Injectable()
export class ExhibitsService {

  // exhibits: any[any];
  private getAllExhibitsUrl = "/exhibit/exhibits";
  private updateExhibitUrl = "/exhibit/exhibits/update/";
  private getExhibitUrl = "/exhibit/exhibits/";
  private getAllExhibitToursUrl = "/exhibit/exhibits/tours/";
  private removeTourFromExhibitUrl = "/exhibit/exhibits/removeTour";

  private tourExhibitDao = {
    "tourId": null,
    "exhibitId": null,
  };

  constructor(private dataService: DataService) {
  }

  getAllExhibits() {
    return this.dataService.getData("/api" + this.getAllExhibitsUrl).pipe(
      map(exhibit  => exhibit as Exhibit)
    )
  }

  getExhibit(id: number) {
    return this.dataService.getData("/api" + this.getExhibitUrl + id);
  }

  updateExhibit(id: number, exhibit: any) {
    return this.dataService.postData("/api" + this.updateExhibitUrl + id, exhibit);
  }

  getAllExhibitTours(id: number) {
    return this.dataService.getData("/api" + this.getAllExhibitToursUrl + id);
  }

  removeTourFromExhibit(tourId: number, exhibitId: number) {
    this.tourExhibitDao.tourId = tourId;
    this.tourExhibitDao.exhibitId = exhibitId;
    return this.dataService.postData("/api" + this.removeTourFromExhibitUrl, this.tourExhibitDao);
  }
}
