import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { ScannerInfo } from '../scannerInfo/scannerInfo';
@Component({
  selector: 'page-scannerPage',
  templateUrl: 'scannerPage.html'
})
export class ScannerPage {

   scanData : {};
   options : BarcodeScannerOptions;
   constructor(public navCtrl: NavController, private barcodeScanner: BarcodeScanner) {
  }    

  scan(){
    this.options = {
        prompt : "Scan your barcode "
    }
    
    this.barcodeScanner.scan(this.options).then((barcodeData) => {
        // console.log(barcodeData + "barcode data");
        this.scanData = barcodeData;
      
        this.navCtrl.push(ScannerInfo,{data: this.scanData

        });
      
    }, (err) => {
        console.log("Error occured : " + err);
    });         

  }
    // refresh(){
    //   window['location'].reload();
    // }
}
