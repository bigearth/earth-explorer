import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { Explorer } from './app.component';
import { BlocktrailService } from '../services/blocktrail.service';
import { NavigationService } from '../services/navigation.service';
import { ComponentsModule } from '../components/components.module'
import { HomePageModule } from '../pages/home/home.module'


@NgModule({
  declarations: [
    Explorer,
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    HomePageModule,
    IonicModule.forRoot(Explorer)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    Explorer,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BlocktrailService,
    NavigationService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
