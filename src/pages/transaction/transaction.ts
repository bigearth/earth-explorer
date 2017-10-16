import { Component } from '@angular/core';
import { BlocktrailService } from '../../services/blocktrail.service';
import { Transaction } from '../../services/transaction';
import { NavController, NavParams, IonicPage, LoadingController } from 'ionic-angular';

@IonicPage({
  segment: 'transactions/:transactionId'
})
@Component({
  selector: 'page-transaction',
  templateUrl: 'transaction.html'
})
export class TransactionPage {
  selectedTransaction: string;
  transaction: Transaction;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public blocktrailService: BlocktrailService,
    public loadingCtrl: LoadingController
  ) {
    this.selectedTransaction = navParams.get('transactionId');
    const loading = this.loadingCtrl.create({
      spinner: 'dots',
      content: 'Getting Data...'
    });
    loading.present();

    this.blocktrailService.getTransaction(this.selectedTransaction).then(rsp => {
      this.transaction = rsp;
      loading.dismiss();
    });
  }

}
