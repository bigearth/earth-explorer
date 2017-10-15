import { Component, Input } from '@angular/core';
import { Transaction } from '../../services/transaction';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'transaction',
  templateUrl: 'transaction.html'
})
export class TransactionComponent {

  @Input() data: Transaction;

  constructor(
    public navCtrl: NavController,
  ) {
  }

  transactionSelected(event, transaction) {
    this.navCtrl.push('TransactionPage', {
      transactionId: transaction.hash
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
