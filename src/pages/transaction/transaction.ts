import { Component } from '@angular/core';
import { BlocktrailService } from '../../services/blocktrail.service';
import { Transaction } from '../../services/transaction';
import { NavController, NavParams } from 'ionic-angular';
import { AddressPage } from '../address/address';

@Component({
  selector: 'transaction',
  templateUrl: 'transaction.html'
})
export class TransactionPage {
  selectedTransaction: string;
  transaction: Transaction;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public blocktrailService: BlocktrailService
  ) {
    this.selectedTransaction = navParams.get('transaction');

    this.blocktrailService.getTransaction(this.selectedTransaction).then(rsp => {
      this.transaction = rsp;
    });
  }

  addressSelected(event, address) {
    this.navCtrl.push(AddressPage, {
      address: address
    });
  }
}
