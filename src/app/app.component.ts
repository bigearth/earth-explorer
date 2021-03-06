import { Component, ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Nav } from 'ionic-angular';
import { NavigationService } from '../services/navigation.service';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class Explorer {
  rootPage: any = HomePage;
  @ViewChild(Nav) nav: Nav;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    public navigationService: NavigationService
) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openPage(location) {
    this.nav.setRoot(this.navigationService.nav(location));
  }
}
