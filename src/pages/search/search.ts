import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { BlocktrailService } from '../../services/blocktrail.service';

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  address: string;
  block: string;
  transaction: string;

  constructor(
    public navCtrl: NavController,
    public blocktrailService: BlocktrailService
  ) { }

  nav(location) {
    if (location === 'back') {
      this.navCtrl.pop();
    } else if (location === 'scan') {
      location = 'ScanPage';
      this.navCtrl.push(location);
    }
  }

  getItems(ev: any) {
    // set val to the value of the searchbar
    let val: string = ev.target.value;

    this.blocktrailService.getBlock(val).then(rsp => {
      this.block = rsp;
    }, err => {
      this.block = null;
    });

    this.blocktrailService.getAddress(val).then(rsp => {
      this.address = rsp;
    }, err => {
      this.address = null;
    });

    this.blocktrailService.getTransaction(val).then(rsp => {
      this.transaction = rsp;
    }, err => {
      this.transaction = null;
    });
  }

  selected(type, id) {
    if(type === 'address') {
      this.navCtrl.push('AddressPage', {
        addressId: id
      });
    } else if(type === 'block') {
      this.navCtrl.push('BlockPage', {
        blockId: id
      });
    } else if(type === 'transaction') {
      this.navCtrl.push('TransactionPage', {
        transactionId: id
      });
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

}
