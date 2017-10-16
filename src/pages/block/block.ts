import { Component } from '@angular/core';
import { BlocktrailService } from '../../services/blocktrail.service';
import { NavigationService } from '../../services/navigation.service';
import { Block } from '../../services/block';
import { Transaction } from '../../services/transaction';
import { NavController, NavParams, IonicPage, LoadingController } from 'ionic-angular';

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
  page: number = 1;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public blocktrailService: BlocktrailService,
    public navigationService: NavigationService,
    public loadingCtrl: LoadingController
  ) {
    this.selectedBlock = navParams.get('blockId');
    const loading = this.loadingCtrl.create({
      spinner: 'dots',
      content: 'Getting Data...'
    });
    loading.present();

    this.blocktrailService.getBlock(this.selectedBlock).then(rsp => {
      this.block = rsp;
      loading.dismiss();
    });

    this.blocktrailService.getBlockTransactions(this.selectedBlock, this.page).then(rsp => {
      ++this.page;
      this.transactions = rsp.data;
    });
  }

  nav(location) {
    this.navCtrl.push(this.navigationService.nav(location));
  }

  fetchData(infiniteScroll) {
    console.log('called');
    this.blocktrailService.getBlockTransactions(this.selectedBlock, this.page).then(rsp => {
      ++this.page;
      rsp.data.forEach(item => {
        this.transactions.push(item);
      });
      infiniteScroll.complete();
    });
  }
}
