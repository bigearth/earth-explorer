import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BlockPage } from './block';
import { ComponentsModule } from '../../components/components.module'

@NgModule({
  declarations: [
    BlockPage
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(BlockPage)
  ]
})
export class BlockPageModule {}
