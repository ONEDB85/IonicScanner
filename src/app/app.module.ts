import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { CameraPreview } from '@ionic-native/camera-preview';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ScannerPage } from '../pages/scannerPage/scannerPage';
import { ScannerInfo } from '../pages/scannerInfo/scannerInfo';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    ScannerPage,
    ScannerInfo
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{tabsPlacement:'middle',})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    ScannerPage,
    ScannerInfo
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    CameraPreview,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
   
  ]
})
export class AppModule {}
