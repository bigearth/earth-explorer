import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

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
    public blocktrailService: BlocktrailService
  ) {
    this.blocktrailService.getBlocks().then(rsp => {
      this.blocks = rsp.data;
    });
  }

}
