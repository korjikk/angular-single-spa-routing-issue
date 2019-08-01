import { Component, OnInit } from '@angular/core';
import { navigateToUrl } from 'single-spa';
@Component({
  selector: 'app-first-child',
  templateUrl: './first-child.component.html',
  styleUrls: ['./first-child.component.scss']
})
export class FirstChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  notUsedAnywhere() {
    navigateToUrl('');
  }
}
