import { Component } from '@angular/core';
import { ToastController } from 'ionic-angular';
import { NavController } from 'ionic-angular';
// import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // scanData: string;
  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {
  
    let toast = this.toastCtrl.create({

     message: 'Scan your bar code!', duration: 3000, position: 'middle'
    });

      window.setTimeout(() => {toast.present();}, 2000);

  }


}