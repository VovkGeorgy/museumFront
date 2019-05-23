import {Injectable} from "@angular/core";
import {DataService} from "../data.service";

@Injectable()
export class GuidesService {

  constructor(private dataService: DataService) {
  }

  private getAllGuidesUrl = "/api/guide/guides";
  private addGuideUrl = "/api/guide/guides/add";
  private updateGuideUrl = "/api/guide/guides/update/";
  private deleteGuideUrl = "/api/guide/guides/delete/";
  private getGuideUrl = "/api/guide/guides/getByUsername";


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

}
