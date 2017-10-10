import { Component } from '@angular/core';
import { BlocktrailService } from '../../services/blocktrail.service';
import { Block } from '../../services/block';
import { NavController } from 'ionic-angular';
import { BlockPage } from '../block/block';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  blocks: Block[];
  constructor(public navCtrl: NavController, public blocktrailService: BlocktrailService) {
    this.blocktrailService.getBlocks().then(rsp => {
      this.blocks = rsp.data;
    });
  }

  blockTapped(event, block) {
    this.navCtrl.push(BlockPage, {
      block: block.height
    });
  }
}
