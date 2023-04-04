import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Wildcard404Page } from './wildcard404.page';

const routes: Routes = [
  {
    path: '',
    component: Wildcard404Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Wildcard404PageRoutingModule {}
