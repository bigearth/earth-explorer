import { Component, Input } from '@angular/core';
import { Block } from '../../services/block';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'block',
  templateUrl: 'block.html'
})
export class BlockComponent {

  @Input() data: Block;
  @Input() showLink: boolean = true;

  constructor(
    public navCtrl: NavController,
  ) { }

  blockSelected(event, block) {
    if(this.showLink) {
      this.navCtrl.push('BlockPage', {
        blockId: block.height
      });
    }
  }

}
