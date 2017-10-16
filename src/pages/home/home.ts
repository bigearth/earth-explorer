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
  constructor(
    public blocktrailService: BlocktrailService,
    public loadingCtrl: LoadingController
  ) {

    const loading = this.loadingCtrl.create({
      spinner: 'dots',
      content: 'Getting Data...'
    });
    loading.present();

    this.blocktrailService.getBlocks().then(rsp => {
      this.blocks = rsp.data;
      loading.dismiss();
    });
  }

}
