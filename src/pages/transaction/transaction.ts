import { Component } from '@angular/core';
import { BlocktrailService } from '../../services/blocktrail.service';
import { Transaction } from '../../services/transaction';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

@IonicPage({
  segment: 'transactions/:transactionId'
}
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
    this.selectedTransaction = navParams.get('transactionId');

    this.blocktrailService.getTransaction(this.selectedTransaction).then(rsp => {
      this.transaction = rsp;
    });
  }

  addressSelected(event, address) {
    if(address !== null) {
      this.navCtrl.push('AddressPage', {
        addressId: address
      });
    }
  }
}
