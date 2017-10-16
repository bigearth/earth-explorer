import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";

import { BitcoinPipe } from './bitcoin/bitcoin';
@NgModule({
	declarations: [BitcoinPipe],
	imports: [CommonModule],
	exports: [BitcoinPipe]
})
export class PipesModule {}
