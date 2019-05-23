import {Injectable} from "@angular/core";
import {DataService} from "../data.service";

@Injectable()
export class TourService {

  constructor(private dataService: DataService) {
  }

  private getTourGuideUrl = "/api/tour/tours/guide/";
  private getTourUrl = "/api/tour/tours/";
  private updateTourUrl = "/api/tour/tours/update/";
  private getToursUrl = "/api/tour/tours";
  private getTourExhibitsUrl = "/api/tour/exhibits/";
  private getTourVisitorsUrl = "/api/tour/tours/visitors/";
  private removeTourFromVisitorUrl = "/api/visitor/visitors/removeTour";
  private removeTourFromExhibitUrl = "/api/exhibit/exhibits/removeTour";
  private removeTourFromGuideUrl = "/api/guide/guides/removeTour";

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
    return this.dataService.getData(this.getTourUrl + id);
  }

  getTourGuide(id: number) {
    return this.dataService.getData(this.getTourGuideUrl + id);
  }

  updateTour(id: number, tour: any) {
    return this.dataService.postData(this.updateTourUrl + id, tour);
  }

  getTours() {
    return this.dataService.getData(this.getToursUrl);
  }

  getTourExhibits(id: number) {
    return this.dataService.getData(this.getTourExhibitsUrl + id);
  }

  getTourVisitors(id: number) {
    return this.dataService.getData(this.getTourVisitorsUrl + id);
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
