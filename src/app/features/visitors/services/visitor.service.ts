import {Injectable} from "@angular/core";
import {DataService} from "../../../core/services/data.service";

@Injectable()
export class VisitorService {

  constructor(private dataService: DataService) {
  }

  private getAllVisitorsUrl = "/api/visitor/visitors";
  private addVisitorUrl = "/api/visitor/add";
  private updateVisitorUrl = "/api/visitor/update/";
  private deleteVisitorUrl = "/api/visitor/delete/";
  private getVisitorUrl = "/api/visitor/getByUsername";
  private removeTourFromVisitorUrl = "/api/visitor/removeTour";
  private addTourToVisitorUrl = "/api/visitor/addTour";
  private checkTourFromVisitorUrl = "/api/visitor/toursCheck";

  private tourVisitorDao = {
    "tourId": null,
    "visitorId": null,
  };

  getAllVisitors() {
    return this.dataService.getData(this.getAllVisitorsUrl);
  }

  getVisitorByUsername(username: string) {
    return this.dataService.postData(this.getVisitorUrl, username);
  }

  addVisitor(visitor: any) {
    return this.dataService.postData(this.addVisitorUrl, visitor);
  }

  updateVisitor(id: number, visitor: any) {
    return this.dataService.postData(this.updateVisitorUrl + id, visitor);
  }

  deleteVisitor(id: number, visitor: any) {
    return this.dataService.postData(this.deleteVisitorUrl + id, visitor);
  }

  removeTourFromVisitor(tourId: number, visitorId: number) {
    this.tourVisitorDao.tourId = tourId;
    this.tourVisitorDao.visitorId = visitorId;
    return this.dataService.postData(this.removeTourFromVisitorUrl, this.tourVisitorDao);
  }

  addTourToVisitor(tourId: number, visitorId: number) {
    this.tourVisitorDao.tourId = tourId;
    this.tourVisitorDao.visitorId = visitorId;
    return this.dataService.postData(this.addTourToVisitorUrl, this.tourVisitorDao);
  }

  checkTourInFavourites(tourId: number, visitorId: number) {
    this.tourVisitorDao.tourId = tourId;
    this.tourVisitorDao.visitorId = visitorId;
    return this.dataService.postData(this.checkTourFromVisitorUrl, this.tourVisitorDao);
  }
}

