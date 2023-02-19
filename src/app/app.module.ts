import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './features/nav-bar/nav-bar.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { MobileMenuComponent } from './features/nav-bar/mobile-menu/mobile-menu.component';
import { FilterPipe } from './features/dashboard/pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { ItemPageComponent } from './features/item-page/item-page.component';
import { MobilesPageComponent } from './features/dashboard/mobiles-page/mobiles-page.component';
import { LaptopsPageComponent } from './features/dashboard/laptops-page/laptops-page.component';
import { LayoutComponent } from './features/dashboard/layout/layout.component';
import { CartModalComponent } from './features/cart-modal/cart-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    DashboardComponent,
    MobileMenuComponent,
    FilterPipe,
    ItemPageComponent,
    MobilesPageComponent,
    LaptopsPageComponent,
    LayoutComponent,
    CartModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
