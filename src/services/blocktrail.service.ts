import { Injectable } from '@angular/core';
import Blocktrail from 'blocktrail-sdk';

@Injectable()
export class BlocktrailService {
  client: any;

  constructor() {
    this.client = Blocktrail.BlocktrailSDK({
      apiKey: "",
      apiSecret: "",
      network: "BCC",
      testnet: false
    });
  }

  getBlocks(): Promise<any>{
    return this.client.allBlocks({
      sort_dir: 'desc'
    }, (err, blocks) => {});
  }
}
