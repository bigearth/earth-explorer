import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { BlocktrailService } from '../../services/blocktrail.service';
import { Block } from '../../services/block';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  blocks: Block[];
  constructor(
    public navCtrl: NavController,
    public blocktrailService: BlocktrailService,
  ) {
    this.blocktrailService.getBlocks().then(rsp => {
      this.blocks = rsp.data;
    });
  }

  blockSelected(event, block) {
    this.navCtrl.push('BlockPage', {
      blockId: block.height
    });
  }
}
