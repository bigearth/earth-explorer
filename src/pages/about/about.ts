import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { NavigationService } from '../../services/navigation.service';

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  constructor(
    public navCtrl: NavController,
    public navigationService: NavigationService) {
  }

  nav(location) {
    this.navCtrl.push(this.navigationService.nav(location));
  }

}
