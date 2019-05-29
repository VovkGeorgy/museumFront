import {Component, OnInit} from '@angular/core';
import {Guide} from '../../../../core/models/entity-models';
import {GuidesService} from '../../services/guides.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.css']
})
export class GuideComponent implements OnInit {

  updatingGuide: Guide;
  isUpdateMode: boolean;
  guides: Guide[];
  detailForm = false;

  constructor(private guideService: GuidesService) {
  }

  ngOnInit() {
    console.log("get all");
    this.guideService.getAllGuides().subscribe((guides: []) => {
      this.guides = guides;
    });
  }

  openCreateForm() {
    this.detailForm = true;
    this.isUpdateMode = false;
    this.updatingGuide = null;
  }

  openUpdateForm($event: any) {
    this.isUpdateMode = true;
    this.detailForm = true;
    this.updatingGuide = $event.guide;
  }

  deleteGuide($event: any) {
    this.guideService.deleteGuide($event.guide.guideId).pipe(first()).subscribe(data => {
      this.ngOnInit();
    });
  }

  saveGuide($event: any) {
    this.detailForm = false;
    this.guideService.addGuide($event.guide).pipe(first()).subscribe(guide => {
      this.ngOnInit();
    });
  }

  updateGuide($event: any) {
    this.detailForm = false;
    this.guideService.updateGuide($event.guide.guideId, $event.guide).pipe(first()).subscribe(guide => {
      this.ngOnInit();
    });
  }

  closeDetail() {
    this.detailForm = false;
  }
}
