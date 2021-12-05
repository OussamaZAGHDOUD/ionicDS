import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowDetailsPage } from './show-details.page';

const routes: Routes = [
  {
    path: '',
    component: ShowDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowDetailsPageRoutingModule {}
