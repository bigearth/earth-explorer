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

    this.blocktrailService.getAddressTransactions(this.selectedAddress).then(rsp => {
      this.transactions = rsp.data;
    });
  }

  transactionSelected(event, transaction) {
    this.navCtrl.push('TransactionPage', {
      transactionId: transaction.hash
    });
  }
}
