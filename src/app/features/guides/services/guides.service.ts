import {Injectable} from "@angular/core";
import {DataService} from "../../../core/services/data.service";
import {Guide} from "../../../core/models/entity-models";
import {map} from "rxjs/operators";

@Injectable()
export class GuidesService {

  constructor(private dataService: DataService) {
  }

  private getGuideByIdUrl = "/api/guide/";
  private getGuideByUsernameUrl = "/api/guide/getByUsername";
  private getAllGuidesUrl = "/api/guide/guides";
  private addGuideUrl = "/api/guide/add";
  private updateGuideUrl = "/api/guide/update/";
  private deleteGuideUrl = "/api/guide/delete/";
  private removeTourFromGuideUrl = "/api/guide/removeTour";

  getGuide(id: number) {
    return this.dataService.getData(this.getGuideByIdUrl + id).pipe(
      map(guide => {
        return guide as Guide;
      })
    );
  }

  getGuideByUsername(username: string) {
    return this.dataService.postData(this.getGuideByUsernameUrl, username).pipe(
      map(guide => {
        return guide as Guide;
      })
    );
  }

  getAllGuides() {
    return this.dataService.getData(this.getAllGuidesUrl).pipe(
      map(guides => {
        return guides as Guide[];
      })
    );
  }

  addGuide(guide: any) {
    return this.dataService.postData(this.addGuideUrl, guide).pipe(
      map(newGuide => {
        return newGuide as Guide;
      })
    );
  }

  updateGuide(updatedGuide: Guide) {
    return this.dataService.postData(this.updateGuideUrl + updatedGuide.guideId, updatedGuide).pipe(
      map(guide => {
        return guide as Guide;
      })
    );
  }

  deleteGuide(id: number) {
    return this.dataService.getData(this.deleteGuideUrl + id);
  }

  deleteTourFromGuide(tourId: number, guideId: number) {
    return this.dataService.postData(this.removeTourFromGuideUrl, {tourId: tourId, guideId: guideId});
  }
}
