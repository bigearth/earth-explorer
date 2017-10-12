import { NgModule } from '@angular/core';
import { NavHeaderComponent } from './nav-header/nav-header';
import { IonicModule } from 'ionic-angular';

@NgModule({
	declarations: [NavHeaderComponent],
	imports: [IonicModule,],
	exports: [NavHeaderComponent]
})
export class ComponentsModule {}
