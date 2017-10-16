import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { NavigationService } from '../../services/navigation.service';

@IonicPage()
@Component({
  selector: 'page-faq',
  templateUrl: 'faq.html',
})
export class FaqPage {

  constructor(
    public navCtrl: NavController,
    public navigationService: NavigationService) {
  }

  nav(location) {
    this.navCtrl.push(this.navigationService.nav(location));
  }

}
