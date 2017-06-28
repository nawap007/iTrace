import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewData } from './view-data';

@NgModule({
  declarations: [
    ViewData,
  ],
  imports: [
    IonicPageModule.forChild(ViewData),
  ],
  exports: [
    ViewData
  ]
})
export class ViewDataModule {}
