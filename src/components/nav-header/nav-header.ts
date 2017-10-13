import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'nav-header',
  templateUrl: 'nav-header.html'
})
export class NavHeaderComponent {

  @Input() page: string;
  @Input() data: any;
  constructor(
    public navCtrl: NavController,
    public navigationService: NavigationService
  ) { }

  nav(location) {
    this.navCtrl.push(this.navigationService.nav(location));
  }
}
