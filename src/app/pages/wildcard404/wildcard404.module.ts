import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Wildcard404PageRoutingModule } from './wildcard404-routing.module';

import { Wildcard404Page } from './wildcard404.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Wildcard404PageRoutingModule
  ],
  declarations: [Wildcard404Page]
})
export class Wildcard404PageModule {}
