import { Component } from '@angular/core';
import { BlocktrailService } from '../../services/blocktrail.service';
import { Address } from '../../services/address';
import { Transaction } from '../../services/transaction';
import { NavController, NavParams, IonicPage, LoadingController } from 'ionic-angular';

@IonicPage({
  segment: 'address/:addressId'
})
@Component({
  selector: 'page-address',
  templateUrl: 'address.html'
})
export class AddressPage {
  selectedAddress: string;
  address: Address;
  transactions: Transaction[];
  page: number = 1;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public blocktrailService: BlocktrailService,
    public loadingCtrl: LoadingController
  ) {
    this.selectedAddress = navParams.get('addressId');

    const loading = this.loadingCtrl.create({
      spinner: 'dots',
      content: 'Getting Data...'
    });
    loading.present();

    this.blocktrailService.getAddress(this.selectedAddress).then(rsp => {
      this.address = rsp;
      loading.dismiss();
    });

    this.blocktrailService.getAddressTransactions(this.selectedAddress, this.page).then(rsp => {
      ++this.page;
      this.transactions = rsp.data;
    });
  }

  transactionSelected(event, transaction) {
    this.navCtrl.push('TransactionPage', {
      transactionId: transaction.hash
    });
  }

  fetchData(infiniteScroll) {
    this.blocktrailService.getAddressTransactions(this.selectedAddress, this.page).then(rsp => {
      ++this.page;
      rsp.data.forEach(item => {
        this.transactions.push(item);
      });
      infiniteScroll.complete();
    });
  }
}
