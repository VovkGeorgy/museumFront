import {Injectable} from "@angular/core";
import {DataService} from "../../../core/services/data.service";
import {map} from "rxjs/operators";
import {Tour} from "../../../core/models/entity-models";
import {Observable} from "rxjs/internal/Observable";

@Injectable()
export class TourService {

  constructor(private dataService: DataService) {
  }

  private getTourUrl = "/api/tour/";
  private getToursUrl = "/api/tour/tours";
  private updateTourUrl = "/api/tour/update/";
  private getTourGuideUrl = "/api/tour/guide/";
  private getTourExhibitsUrl = "/api/tour/exhibits/";
  private getTourVisitorsUrl = "/api/tour/visitors/";
  private getTourWithoutGuideUrl = "/api/tour/tours/withoutGuide/";
  private removeTourFromVisitorUrl = "/api/visitor/removeTour";
  private removeTourFromExhibitUrl = "/api/exhibit/removeTour";
  private removeTourFromGuideUrl = "/api/guide/removeTour";

  private tourVisitorDao = {
    "tourId": null,
    "visitorId": null,
  };

  private tourExhibitDao = {
    "tourId": null,
    "exhibitId": null,
  };

  private tourGuideDao = {
    "tourId": null,
    "guideId": null,
  };

  getTour(id: number) {
    return this.dataService.getData(this.getTourUrl + id).pipe(
      map(tour => tour as Tour)
    );
  }

  getTourGuide(id: number) {
    return this.dataService.getData(this.getTourGuideUrl + id);
  }

  updateTour(id: number, tour: any) {
    return this.dataService.postData(this.updateTourUrl + id, tour);
  }

  getTours(): Observable<Tour[]> {
    return this.dataService.getData(this.getToursUrl).pipe(
      map(value => value as Tour[])
    );
  }

  getTourExhibits(id: number) {
    return this.dataService.getData(this.getTourExhibitsUrl + id);
  }

  getTourVisitors(id: number) {
    return this.dataService.getData(this.getTourVisitorsUrl + id);
  }

  getToursWithoutGuide() {
    return this.dataService.getData(this.getTourWithoutGuideUrl).pipe(
      map(value => value as Tour[])
    );
  }

  removeVisitorFromTour(tourId: number, visitorId: number) {
    this.tourVisitorDao.tourId = tourId;
    this.tourVisitorDao.visitorId = visitorId;
    return this.dataService.postData(this.removeTourFromVisitorUrl, this.tourVisitorDao);
  }

  removeExhibitFromTour(tourId: number, exhibitId: number) {
    this.tourExhibitDao.tourId = tourId;
    this.tourExhibitDao.exhibitId = exhibitId;
    return this.dataService.postData(this.removeTourFromExhibitUrl, this.tourExhibitDao);
  }

  removeGuideFromTour(tourId: number, guideId: number) {
    this.tourGuideDao.tourId = tourId;
    this.tourGuideDao.guideId = guideId;
    return this.dataService.postData(this.removeTourFromGuideUrl, this.tourGuideDao);
  }
}
