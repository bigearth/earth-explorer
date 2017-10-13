import { Component, Input } from '@angular/core';
import { Block } from '../../services/block';
import { IonicPage, NavController } from 'ionic-angular';

@Component({
  selector: 'block',
  templateUrl: 'block.html'
})
export class BlockComponent {

  @Input() data: Block;

  constructor(
    public navCtrl: NavController,
  ) { }

  blockSelected(event, block) {
    this.navCtrl.push('BlockPage', {
      blockId: block.height
    });
  }

}
