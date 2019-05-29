import {Component, OnInit} from '@angular/core';
import {first} from 'rxjs/operators';
import {ExhibitsService} from '../../services/exhibits.service';
import {Exhibit} from '../../../../core/models/entity-models';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-exhibit',
  templateUrl: './exhibit.component.html',
  styleUrls: ['./exhibit.component.css']
})
export class ExhibitComponent implements OnInit {

  exhibits: Exhibit[];

  constructor(private exhibitsService: ExhibitsService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.exhibitsService.getAllExhibits()
      .pipe(first())
      .subscribe((exhibits: []) => {
        this.exhibits = exhibits;
      });
  }

  editExhibit($event) {
    this.router.navigate(["exhibits/edit", {exhibitId: $event.exhibit.exhibitId}]);
  }

  viewExhibit($event) {
    this.router.navigate(["exhibits/view", {exhibitId: $event.exhibit.exhibitId}]);

  }
}
