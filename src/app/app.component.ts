import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private menu: MenuController,
              public router: Router) {}


  ionDidOpen(event) {
    // console.log(event);
    this.menu.isOpen().then(() => {
      console.log('opened');
    });
  }

  ionDidClose(event) {
    // console.log(event);
    this.menu.isOpen().then(() => {
      console.log('Closed');
    });
  }

  openEnd(item: string) {
    console.log(item + '-->  is clicked');
    this.menu.close();
  }

  amisCategories()  {
    this.router.navigateByUrl('/tabs/tab2');

  }
  familleCategories() {
    this.router.navigateByUrl('/tabs/tab3');

  }

  professionelCategories(){
    this.router.navigateByUrl('/tabs/tab4');

  }

  autresCategories() {
    this.router.navigateByUrl('/tabs/tab5');

  }

  logout() {
    this.router.navigateByUrl('/login');
    console.log('U are out');
  }

}
