import { Component } from '@angular/core';
import { BlocktrailService } from '../../services/blocktrail.service';
import { IonicPage, NavController, LoadingController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-convert',
  templateUrl: 'convert.html',
})
export class ConvertPage {
  bitcoinTotal: string = '0';
  usdTotal: string = '0';
  exchangeRate: number = 0;
  active: string = 'usd';

  constructor(
    public navCtrl: NavController,
    public blocktrailService: BlocktrailService,
    public loadingCtrl: LoadingController
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

  calculate(val: any) {
    if(val !== 'C') {
      let decimals: string = this.usdTotal.split('.')[1];

      let newUSDTotal: string;
      if(!decimals || (decimals && decimals.length <= 1)) {
        newUSDTotal = `${this.usdTotal}${val}`;
      } else {
        newUSDTotal = this.usdTotal;
      }

      this.usdTotal = newUSDTotal;
      this.bitcoinTotal = (parseFloat(this.usdTotal) / this.exchangeRate).toString();

    } else  {
      this.usdTotal = '0';
      this.bitcoinTotal = '0';

    }
  }
}
