import { Injectable } from '@angular/core';
import Blocktrail from 'blocktrail-sdk';

@Injectable()
export class BlocktrailService {
  client: any;

  constructor() {
    this.client = Blocktrail.BlocktrailSDK({
      network: "BCC",
      apiKey: "",
      apiSecret: "",
      testnet: false
    });
  }

  getBlocks(page: number): Promise<any>{
    return this.client.allBlocks({
      sort_dir: 'desc',
      page: page
    }, (err, blocks) => {});
  }

  getBlock(block: number | string): Promise<any>{
    return this.client.block(block, (err, block) => {});
  }

  getBlockTransactions(block: number | string, page: number): Promise<any>{
    return this.client.blockTransactions(block, {
      page: page
    }, (err, block) => {});
  }

  getTransaction(transaction: string): Promise<any>{
    return this.client.transaction(transaction, (err, block) => {});
  }

  getAddress(address: string): Promise<any>{
    return this.client.address(address, (err, block) => {});
  }

  getAddressTransactions(address: string, page: number): Promise<any>{
    return this.client.addressTransactions(address, {
      page: page
    },(err, block) => {});
  }

  getExchangeRate(): Promise<any>{
    return this.client.price((err, block) => {});
  }
}
