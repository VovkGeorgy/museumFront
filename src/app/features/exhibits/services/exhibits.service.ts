import {Injectable} from '@angular/core';
import {DataService} from '../../../core/services/data.service';
import {map} from 'rxjs/operators';
import {Exhibit} from '../../../core/models/entity-models';

@Injectable()
export class ExhibitsService {

  private getExhibitUrl = "/api/exhibit/";
  private getAllExhibitsUrl = "/api/exhibit/exhibits";
  private updateExhibitUrl = "/api/exhibit/update/";
  private getAllExhibitToursUrl = "/api/exhibit/tours/";
  private removeTourFromExhibitUrl = "/api/exhibit/removeTour";

  private tourExhibitDao = {
    "tourId": null,
    "exhibitId": null,
  };

  constructor(private dataService: DataService) {
  }

  getAllExhibits() {
    return this.dataService.getData(this.getAllExhibitsUrl).pipe(
      map(exhibit  => exhibit as Exhibit)
    );
  }

  getExhibit(id: number) {
    return this.dataService.getData( this.getExhibitUrl + id);
  }

  updateExhibit(id: number, exhibit: any) {
    return this.dataService.postData(this.updateExhibitUrl + id, exhibit);
  }

  getAllExhibitTours(id: number) {
    return this.dataService.getData(this.getAllExhibitToursUrl + id);
  }

  removeTourFromExhibit(tourId: number, exhibitId: number) {
    this.tourExhibitDao.tourId = tourId;
    this.tourExhibitDao.exhibitId = exhibitId;
    return this.dataService.postData( this.removeTourFromExhibitUrl, this.tourExhibitDao);
  }
}
