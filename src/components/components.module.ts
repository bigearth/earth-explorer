import { NgModule } from '@angular/core';
import { NavHeaderComponent } from './nav-header/nav-header';
import { IonicModule } from 'ionic-angular';
import { BlockComponent } from './block/block';
import { TransactionComponent } from './transaction/transaction';
import { AddressComponent } from './address/address';

@NgModule({
	declarations: [NavHeaderComponent,
    BlockComponent,
    TransactionComponent,
    AddressComponent],
	imports: [IonicModule,],
	exports: [NavHeaderComponent,
    BlockComponent,
    TransactionComponent,
    AddressComponent]
})
export class ComponentsModule {}
