import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddressPage } from './address';
import { ComponentsModule } from '../../components/components.module'

@NgModule({
  declarations: [
    AddressPage
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(AddressPage)
  ]
})
export class AddressPageModule {}
