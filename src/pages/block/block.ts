import { Component } from '@angular/core';
import { BlocktrailService } from '../../services/blocktrail.service';
import { NavigationService } from '../../services/navigation.service';
import { Block } from '../../services/block';
import { Transaction } from '../../services/transaction';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

@IonicPage({
  segment: 'blocks/:blockId'
})
@Component({
  selector: 'page-block',
  templateUrl: 'block.html'
})
export class BlockPage {
  selectedBlock: number | string;
  block: Block;
  transactions: Transaction[];
  showLink: boolean = false;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public blocktrailService: BlocktrailService,
    public navigationService: NavigationService
  ) {
    this.selectedBlock = navParams.get('blockId');

    this.blocktrailService.getBlock(this.selectedBlock).then(rsp => {
      this.block = rsp;
    });

    this.blocktrailService.getBlockTransactions(this.selectedBlock).then(rsp => {
      this.transactions = rsp.data;
    });
  }


  nav(location) {
    this.navCtrl.push(this.navigationService.nav(location));
  }
}
