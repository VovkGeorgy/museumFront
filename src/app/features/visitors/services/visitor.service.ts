import {Injectable} from "@angular/core";
import {DataService} from "../../../core/services/data.service";

@Injectable()
export class VisitorService {

  constructor(private dataService: DataService) {
  }

  private getVisitorByIdUrl = "/api/visitor/";
  private getAllVisitorsUrl = "/api/visitor/visitors";
  private addVisitorUrl = "/api/visitor/add";
  private updateVisitorUrl = "/api/visitor/update/";
  private deleteVisitorUrl = "/api/visitor/delete/";
  private getVisitorByNameUrl = "/api/visitor/getByUsername";
  private removeTourFromVisitorUrl = "/api/visitor/removeTour";
  private addTourToVisitorUrl = "/api/visitor/addTour";
  private checkTourFromVisitorUrl = "/api/visitor/toursCheck";

  private tourVisitorDao = {
    "tourId": null,
    "visitorId": null,
  };

  getVisitor(id: number) {
    return this.dataService.getData(this.getVisitorByIdUrl + id);
  }

  getAllVisitors() {
    return this.dataService.getData(this.getAllVisitorsUrl);
  }

  getVisitorByUsername(username: string) {
    return this.dataService.postData(this.getVisitorByNameUrl, username);
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

