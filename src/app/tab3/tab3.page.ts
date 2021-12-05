import { Component } from '@angular/core';
import { familleList } from '../tab1/tab1.page';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  famille: {name: string, phone: number, img: string}[]  ;

  constructor() {
    this.famille = familleList;
    console.log(this.famille);
    console.log(this.famille.length);
  }

}
