import { Component, Input } from '@angular/core';
import { Address } from '../../services/address';

@Component({
  selector: 'address',
  templateUrl: 'address.html'
})
export class AddressComponent {

  @Input() data: Address;

  constructor(

  ) {
  }
}
