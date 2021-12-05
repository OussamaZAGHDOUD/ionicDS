import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Contact } from '../models/contact';
import { ContactService } from '../services/contact-service.service';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.page.html',
  styleUrls: ['./add-contact.page.scss'],
})

export class AddContactPage implements OnInit {

  addGroup: FormGroup;
  newCon: Contact;
  contactList;
  phone: any;
  phone2: any;
  listeNumber =[];
  dateAdd: any;
  dateUpdate: any;


  constructor( formBuilder: FormBuilder,
               private router: Router,
               private contactService: ContactService,
               public toastController: ToastController,
               private alertCtrl: AlertController
               ) {

    this.contactList = this.contactService.getAllContact();
    this.addGroup = formBuilder.group(
      {
        name: ['', [Validators.required]],
        lastname: ['',[Validators.required]],
        phone: ['', [Validators.compose([ Validators.pattern('[0-9]*'), Validators.minLength(8), Validators.maxLength(8)])]],
        phone2: ['', [Validators.compose([ Validators.pattern('[0-9]*'), Validators.minLength(8), Validators.maxLength(8)])]],
        img: ['', [Validators.required]],
      }
    );
   }

  ngOnInit() {
    this.getAllNumber();
  }

  getAllNumber(){
    for(let num of this.contactList)
    {
      this.listeNumber.push(num["phone"]);
    }
    console.log('listeNumber',this.listeNumber);
    return this.listeNumber;
  }

  addContact(){
    if((this.phone2 !== this.phone) && (!JSON.stringify(this.listeNumber).includes(this.phone))) {
      //console.log(JSON.stringify(this.listeNumber).includes(this.phone));
        this.newCon = this.addGroup.value;
        this.dateAdd = Date.now();
        this.dateUpdate  = Date.now();
       this.contactList.push(this.newCon);
       console.log('Contact Saved Successfully');
       console.log('new list',this.contactList);
        this.router.navigateByUrl('/');
    }
    else {
        console.log('the same number exist in other contact');
        this.alertCtrl.create({
          header: 'Cannot add this contact !',
          message: 'the same number exist in other contact !',
          buttons: [
            {
              text:'Cancel',
              role: 'cancel'
            },
          ]
        }).then(alertElm => alertElm.present());
    }
}
}

export let newContacts: {name: string, phone: number, img: string}[];


