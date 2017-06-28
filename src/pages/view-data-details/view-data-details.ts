import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { AppUrl } from '../../app/appurl';

/**
 * Generated class for the ViewDataDetails page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-view-data-details',
  templateUrl: 'view-data-details.html',
})
export class ViewDataDetails {

  id: any;
  dataList: any = [];

  constructor(public http: Http, public navCtrl: NavController, public navParams: NavParams) {
    this.id = this.navParams.get('data');
    console.log('recieved id to render : ');

    this.dataList = [
      {
        "asid": "pawan dummy",
        "createdAt": "2017-05-29T00:57:09.537Z",
        "updatedAt": "2017-05-29T00:57:09.537Z",
        "id": "592b71e531aa41ba51ba39e3"
      },
      {
        "asid": "ankit dummy",
        "createdAt": "2017-05-29T00:59:23.519Z",
        "updatedAt": "2017-05-29T00:59:23.519Z",
        "id": "592b726b31aa41ba51ba39e9"
      },
      {
        "asid": "pojo dummy",
        "createdAt": "2017-05-29T00:59:31.362Z",
        "updatedAt": "2017-05-29T00:59:31.362Z",
        "id": "592b727331aa41ba51ba39ea"
      }
    ];

    console.log(this.id);

  }

  ionViewDidLoad() {

    // let headers = new Headers();
    // headers.append('Content-Type', 'application/json');
    //headers.append('Access-Control-Allow-Origin', '');

    this.http.get(AppUrl.DATA_DETAIL_URL + this.id).subscribe(value => {
      this.dataList = value.json();
      console.log(this.dataList);
    }, (error) => {
      console.log(error);
    });
    console.log('ionViewDidLoad ViewDataDetails');
  }

}
