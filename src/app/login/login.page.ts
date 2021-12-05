import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: any;
  password: any;
  userLogin = 'glsi3';
  pass = 123;

  constructor(
    public modalCtrl: ModalController,
    public router: Router,
  ) {
   }

  ngOnInit() {
  }

  async dismiss() {
    await this.modalCtrl.dismiss();
  }

  login() {
   if (this.user == this.userLogin && this.password == this.pass)
   {
     console.log('login success',this.user,this.password);
     this.router.navigateByUrl('/tabs/tab1');
   }
   else {
     console.log('login failed',this.user,this.password);
     this.router.navigateByUrl('/login');
    }

  }

}
