import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaptopsPageComponent } from './laptops-page.component';

const routes: Routes = [{
  path: '',
  component: LaptopsPageComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LaptopsPageRoutingModule { }
