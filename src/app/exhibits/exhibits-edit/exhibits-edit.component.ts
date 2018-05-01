import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DataService} from "../../service/data.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-exhibits-edit',
  templateUrl: './exhibits-edit.component.html',
  styleUrls: ['./exhibits-edit.component.css']
})
export class ExhibitsEditComponent implements OnInit {

  constructor(private router: Router,
              private route: ActivatedRoute,
              private dataService: DataService) { }

  exhibit: any;
  tempExhibit: any;
  updateExhibitUrl = '/exhibit/exhibits/update/';
  exhibitForm: FormGroup = new FormGroup({
    exhibitId: new FormControl(''),
    title: new FormControl(''),
    dated: new FormControl(''),
    material: new FormControl(''),
    archiveNum: new FormControl(''),
    description: new FormControl(''),
    imageUrl: new FormControl(''),
  });

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.exhibit = params;
      this.exhibitForm.setValue(this.exhibit);
    });
  }

  updateExhibit() {
    let localExhibit = this.exhibitForm.getRawValue();
    this.dataService.postData(this.updateExhibitUrl + localExhibit.exhibitId, this.exhibitForm.getRawValue())
      .subscribe(exhibit => {
        this.tempExhibit = exhibit;
        this.router.navigate(['/exhibits']);
      });
  }
}
