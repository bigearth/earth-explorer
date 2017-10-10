import { Injectable } from '@angular/core';
import Blocktrail from 'blocktrail-sdk';
import { Block } from './block';

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

  getBlock(block: number | string): Promise<any>{
    return this.client.block(block, (err, block) => {});
  }

  getBlockTransactions(block: number | string): Promise<any>{
    return this.client.blockTransactions(block, (err, block) => {});
  }
}
