import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewData } from '../view-data/view-data';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  pages: Array<{ title: string, component: any }>;


  constructor(public navCtrl: NavController) {
    this.pages = [
      { title: 'data', component: ViewData }

    ];



  }

 openPage(page) {

    this.navCtrl.push(page.component);

  }


}
