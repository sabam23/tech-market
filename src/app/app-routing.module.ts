import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'mobiles',
    loadChildren: () =>
      import(
        './features/dashboard/mobiles-page/mobiles-page.module'
      ).then((m) => m.MobilesPageModule),
  },
  {
    path: 'laptops',
    loadChildren: () =>
      import(
        './features/dashboard/laptops-page/laptops-page.module'
      ).then((m) => m.LaptopsPageModule),
  },
  {
    path: 'device/:deviceId',
    loadChildren: () =>
      import(
        './features/item-page/item-page.module'
      ).then((m) => m.ItemPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
