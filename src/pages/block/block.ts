import { Component } from '@angular/core';
import { BlocktrailService } from '../../services/blocktrail.service';
import { Block } from '../../services/block';
import { Transaction } from '../../services/transaction';
import { NavController, NavParams } from 'ionic-angular';
import { TransactionPage } from '../transaction/transaction';

@Component({
  selector: 'page-block',
  templateUrl: 'block.html'
})
export class BlockPage {
  selectedBlock: number | string;
  block: Block;
  transactions: Transaction[];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public blocktrailService: BlocktrailService
  ) {
    this.selectedBlock = navParams.get('block');

    this.blocktrailService.getBlock(this.selectedBlock).then(rsp => {
      this.block = rsp;
    });

    this.blocktrailService.getBlockTransactions(this.selectedBlock).then(rsp => {
      this.transactions = rsp.data;
    });
  }

  transactionSelected(event, transaction) {
    this.navCtrl.push(TransactionPage, {
      transaction: transaction.hash
    });
  }
}
