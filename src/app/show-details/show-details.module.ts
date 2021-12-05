import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowDetailsPageRoutingModule } from './show-details-routing.module';

import { ShowDetailsPage } from './show-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowDetailsPageRoutingModule
  ],
  declarations: [ShowDetailsPage]
})
export class ShowDetailsPageModule {}
