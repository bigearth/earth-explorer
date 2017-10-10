export class Block {
  hash: string;
  height: number;
  block_time: string;
  difficulty: number;
  merkleroot: string;
  is_orphan: boolean;
  prev_block: string;
  next_block: string;
  byte_size: number;
  confirmations: number;
  transactions: number;
  value: number;
  miningpool_name: string;
  miningpool_url: string;
  miningpool_slug: string;
}
