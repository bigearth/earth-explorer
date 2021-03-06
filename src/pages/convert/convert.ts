import { Component } from '@angular/core';
import { BlocktrailService } from '../../services/blocktrail.service';
import { IonicPage, NavController, LoadingController } from 'ionic-angular';
import { NavigationService } from '../../services/navigation.service';

@IonicPage()
@Component({
  selector: 'page-convert',
  templateUrl: 'convert.html',
})
export class ConvertPage {
  bitcoinTotal: string = '0';
  usdTotal: string = '0';
  exchangeRate: number = 0;
  active: string = 'bcc';

  constructor(
    public navCtrl: NavController,
    public blocktrailService: BlocktrailService,
    public loadingCtrl: LoadingController,
    public navigationService: NavigationService
  ) {
    const loading = this.loadingCtrl.create({
      spinner: 'dots',
      content: 'Getting Exchange Rate...'
    });
    loading.present();

    this.blocktrailService.getExchangeRate().then(rsp => {
      this.exchangeRate = rsp.USD;
      loading.dismiss();
    })
  }

  toggleActive(): void {
    if(this.active === 'bcc') {
      this.active = 'usd';
    } else if(this.active === 'usd') {
      this.active = 'bcc';
    }
  }

  calculate(val: any): void {
    if(val !== 'C') {
      let decimals: string;
      if(this.active === 'usd') {
        decimals = this.usdTotal.split('.')[1];

        if(!decimals || (decimals && decimals.length <= 1)) {
          this.usdTotal = `${this.usdTotal}${val}`;
        }

        this.bitcoinTotal = (parseFloat(this.usdTotal) / this.exchangeRate).toString();
      } else if(this.active === 'bcc') {
        decimals = this.bitcoinTotal.split('.')[1];

        if(!decimals || (decimals && decimals.length <= 7)) {
          this.bitcoinTotal = `${this.bitcoinTotal}${val}`;
        }

        this.usdTotal = (parseFloat(this.bitcoinTotal) * this.exchangeRate).toString();
      }
    } else  {
      this.usdTotal = '0';
      this.bitcoinTotal = '0';
    }
  }

  nav(location) {
    this.navCtrl.push(this.navigationService.nav(location));
  }
}
