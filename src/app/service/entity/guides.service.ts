import {Injectable} from "@angular/core";
import {DataService} from "../data.service";

@Injectable()
export class GuidesService {

  constructor(private dataService: DataService) {
  }

  private getAllGuidesUrl = "/guide/guides";
  private addGuideUrl = "/guide/guides/add";
  private updateGuideUrl = "/guide/guides/update/";
  private deleteGuideUrl = "/guide/guides/delete/";
  private getGuideUrl = "/guide/guides/getByUsername";


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
