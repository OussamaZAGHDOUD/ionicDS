import { Component } from '@angular/core';
import { amisList, Tab1Page } from '../tab1/tab1.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  amis: {name: string, phone: number, img: string}[]  ;

  constructor() {
    this.amis = amisList;
    console.log(this.amis);
    console.log(this.amis.length);
  }

}

