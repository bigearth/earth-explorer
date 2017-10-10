import { Input } from './input';
import { Output } from './output';

export class Transaction {
  hash: string;
  time: string;
  confirmations: number;
  is_coinbase: boolean;
  estimated_value: number;
  total_input_value: number;
  total_output_value: number;
  total_fee: number;
  estimated_change: number;
  estimated_change_address: string;
  inputs: Input[];
  outputs: Output[];
}
