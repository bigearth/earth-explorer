import { Component } from '@angular/core';
import { BlocktrailService } from '../../services/blocktrail.service';
import { Address } from '../../services/address';
import { Transaction } from '../../services/transaction';
import { NavController, NavParams } from 'ionic-angular';
import { TransactionPage } from '../transaction/transaction';

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
    public blocktrailService: BlocktrailService
  ) {
    this.selectedAddress = navParams.get('address');

    this.blocktrailService.getAddress(this.selectedAddress).then(rsp => {
      this.address = rsp;
    });

    this.blocktrailService.getAddressTransactions(this.selectedAddress).then(rsp => {
      this.transactions = rsp.data;
    });
  }

  transactionSelected(event, transaction) {
    this.navCtrl.push(TransactionPage, {
      transaction: transaction.hash
    });
  }
}
