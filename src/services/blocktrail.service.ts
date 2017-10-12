import { Injectable } from '@angular/core';
import Blocktrail from 'blocktrail-sdk';

@Injectable()
export class BlocktrailService {
  client: any;

  constructor() {
    this.client = Blocktrail.BlocktrailSDK({
      network: "BCC",
      apiKey: "f4b4845078a7f583e28f387f00e6d954f5cac26a",
      apiSecret: "da449cedb5bc2bd28f462a9a04fdf47b8e07e441",
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

  getTransaction(transaction: string): Promise<any>{
    return this.client.transaction(transaction, (err, block) => {});
  }

  getAddress(address: string): Promise<any>{
    return this.client.address(address, (err, block) => {});
  }

  getAddressTransactions(address: string): Promise<any>{
    return this.client.addressTransactions(address, (err, block) => {});
  }
}
