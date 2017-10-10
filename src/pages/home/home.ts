import { Component } from '@angular/core';
import { BlocktrailService } from '../../services/blocktrail.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public blocktrailService: BlocktrailService) {
    this.blocktrailService.getBlocks().then(rsp => {
      console.log('response:', rsp);
    });
  }
}
