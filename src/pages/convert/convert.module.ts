import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConvertPage } from './convert';
import { PipesModule } from '../../pipes/pipes.module'

@NgModule({
  declarations: [
    ConvertPage,
  ],
  imports: [
    PipesModule,
    IonicPageModule.forChild(ConvertPage),
  ],
})
export class ConvertPageModule {}
