import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
// import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-scannerInfo',
  templateUrl: 'scannerInfo.html'
})
export class ScannerInfo {
  scanData: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.scanData = this.navParams.get('data');
  // console.log(this.scanData)
  }

}
