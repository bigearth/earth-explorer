import { Component, Input } from '@angular/core';
import { Transaction } from '../../services/transaction';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'transaction',
  templateUrl: 'transaction.html'
})
export class TransactionComponent {

  @Input() data: Transaction;
  @Input() showLink: boolean = true;

  constructor(
    public navCtrl: NavController,
  ) {
  }

  transactionSelected(event, transaction) {
    if(this.showLink) {
      this.navCtrl.push('TransactionPage', {
        transactionId: transaction.hash
      });
    }
  }

  addressSelected(event, address) {
    if(address !== null) {
      this.navCtrl.push('AddressPage', {
        addressId: address
      });
    }
  }
}
