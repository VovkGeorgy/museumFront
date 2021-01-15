import {Component, Input, OnInit} from "@angular/core";
import {navTabs} from "../../constants/nav-tabs";

@Component({
  selector: 'app-tab-set',
  templateUrl: './tab-set.component.html',
  styleUrls: ['./tab-set.component.css']
})
export class TabSetComponent implements OnInit {

  @Input()
  tabs: any;

  constructor() { }

  ngOnInit() {
  }
}
