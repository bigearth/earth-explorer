import { NgModule } from '@angular/core';
import { NavHeaderComponent } from './nav-header/nav-header';
import { IonicModule } from 'ionic-angular';
import { BlockComponent } from './block/block';

@NgModule({
	declarations: [NavHeaderComponent,
    BlockComponent],
	imports: [IonicModule,],
	exports: [NavHeaderComponent,
    BlockComponent]
})
export class ComponentsModule {}
