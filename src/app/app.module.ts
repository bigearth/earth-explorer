import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { BlockPage } from '../pages/block/block';
import { TransactionPage } from '../pages/transaction/transaction';
import { AddressPage } from '../pages/address/address';
import { BlocktrailService } from '../services/blocktrail.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BlockPage,
    TransactionPage,
    AddressPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BlockPage,
    TransactionPage,
    AddressPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BlocktrailService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
