import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, Loading } from 'ionic-angular';
import { Http } from '@angular/http';
import { AppUrl } from '../../app/appurl';
import { ViewDataDetails } from '../view-data-details/view-data-details';
/**
 * Generated class for the ViewData page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-view-data',
  templateUrl: 'view-data.html',
})
export class ViewData {

  dataList: any = [];
  loading: Loading;

  constructor(public loadingCtrl: LoadingController, public http: Http, public navCtrl: NavController, public navParams: NavParams) {

    this.dataList = [
      {
        "gatewayId": "demo1 dummy",
        "createdAt": "2017-05-29T00:57:09.537Z",
        "updatedAt": "2017-05-29T00:57:09.537Z",
        "id": "592b71e531aa41ba51ba39e3"
      },
      {
        "gatewayId": "de3mo dummy",
        "createdAt": "2017-05-29T00:59:23.519Z",
        "updatedAt": "2017-05-29T00:59:23.519Z",
        "id": "592b726b31aa41ba51ba39e9"
      },
      {
        "gatewayId": "demo dummy",
        "createdAt": "2017-05-29T00:59:31.362Z",
        "updatedAt": "2017-05-29T00:59:31.362Z",
        "id": "592b727331aa41ba51ba39ea"
      }
    ];

  }

  ionViewDidLoad() {


        this.http.get(AppUrl.DATA_LIST_URL).subscribe(value => {
          this.dataList = value.json();
          console.log(this.dataList);
        }, (error) => {
          console.log(error);
        });


  }


  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait while we are processing your request...'
    });
    this.loading.present();
  }


  showDetails(id) {
    this.navCtrl.push(ViewDataDetails, { data: id });
    console.log(id);

  }

}
