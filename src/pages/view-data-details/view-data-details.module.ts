import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewDataDetails } from './view-data-details';

@NgModule({
  declarations: [
    ViewDataDetails,
  ],
  imports: [
    IonicPageModule.forChild(ViewDataDetails),
  ],
  exports: [
    ViewDataDetails
  ]
})
export class ViewDataDetailsModule {}
