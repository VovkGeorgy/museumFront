import {Injectable} from "@angular/core";
import {DataService} from "../../../core/services/data.service";

@Injectable()
export class GuidesService {

  constructor(private dataService: DataService) {
  }

  private getGuideUrl = "/api/guide/getByUsername";
  private getAllGuidesUrl = "/api/guide/guides";
  private addGuideUrl = "/api/guide/add";
  private updateGuideUrl = "/api/guide/update/";
  private deleteGuideUrl = "/api/guide/delete/";
  private removeTourFromGuideUrl = "/api/guide/removeTour";


  getGuideByUsername(username: string) {
    return this.dataService.postData(this.getGuideUrl, username);
  }

  getAllGuides() {
    return this.dataService.getData(this.getAllGuidesUrl);
  }

  addGuide(guide: any) {
    return this.dataService.postData(this.addGuideUrl, guide);
  }

  updateGuide(id: number, guide: any) {
    return this.dataService.postData(this.updateGuideUrl + id, guide);
  }

  deleteGuide(id: number) {
    return this.dataService.getData(this.deleteGuideUrl + id);
  }

  removeTourFromGuide(tourId: number, guideId: number) {
    return this.dataService.postData(this.removeTourFromGuideUrl, {tourId: tourId, guideId: guideId});
  }
}
