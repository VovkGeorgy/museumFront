import {Injectable} from "@angular/core";
import {DataService} from "./data.service";

@Injectable()
export class ExhibitsService {

  exhibits: any[any];
  private getAllExhibitsUrl = "/exhibit/exhibits";
  private updateExhibitUrl = "/exhibit/exhibits/update/";
  private getExhibitUrl = "/exhibit/exhibits/";
  private getAllExhibitToursUrl = "/exhibit/exhibits/tours/";

  constructor(private dataService: DataService) {
  }

  getAllExhibits() {
    return this.dataService.getData(this.getAllExhibitsUrl);
  }

  getExhibit(id: number) {
    return this.dataService.getData(this.getExhibitUrl + id);
  }

  updateExhibit(id: number, exhibit: any) {
    return this.dataService.postData(this.updateExhibitUrl + id, exhibit);
  }

  getAllExhibitTours(id: number) {
    return this.dataService.getData(this.getAllExhibitToursUrl + id);
  }
}
