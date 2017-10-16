import { NgModule } from '@angular/core';
import { NavHeaderComponent } from './nav-header/nav-header';
import { IonicModule } from 'ionic-angular';
import { BlockComponent } from './block/block';
import { TransactionComponent } from './transaction/transaction';
import { AddressComponent } from './address/address';
import { PipesModule } from '../pipes/pipes.module'

@NgModule({
	declarations: [NavHeaderComponent,
    BlockComponent,
    TransactionComponent,
    AddressComponent],
	imports: [
		IonicModule,
	  PipesModule
	],
	exports: [NavHeaderComponent,
    BlockComponent,
    TransactionComponent,
    AddressComponent]
})
export class ComponentsModule {}
