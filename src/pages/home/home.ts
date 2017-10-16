import { Component } from '@angular/core';
import { IonicPage, LoadingController } from 'ionic-angular';

import { BlocktrailService } from '../../services/blocktrail.service';
import { Block } from '../../services/block';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  blocks: Block[];
  page: number = 1;
  constructor(
    public blocktrailService: BlocktrailService,
    public loadingCtrl: LoadingController
  ) {

    const loading = this.loadingCtrl.create({
      spinner: 'dots',
      content: 'Getting Data...'
    });
    loading.present();

    this.blocktrailService.getBlocks(1).then(rsp => {
      ++this.page;
      this.blocks = rsp.data;
      loading.dismiss();
    });
  }

  fetchData(infiniteScroll) {
    this.blocktrailService.getBlocks(this.page).then(rsp => {
      ++this.page;
      rsp.data.forEach(item => {
        this.blocks.push(item);
      });
      infiniteScroll.complete();
    });

  }

}
