import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobilesPageComponent } from './mobiles-page.component';

const routes: Routes = [
  {
    path: '',
    component: MobilesPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MobilesPageRoutingModule { }
