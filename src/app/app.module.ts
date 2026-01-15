import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';

import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { ProductFormComponent } from './shared/components/product-form/product-form.component';
import { ProductDashboardComponent } from './shared/components/product-dashboard/product-dashboard.component';
import { SingleProductComponent } from './shared/components/single-product/single-product.component';

import { SingleUserComponent } from './shared/components/single-user/single-user.component';
import { UserFormComponent } from './shared/components/user-form/user-form.component';
import { UserDashboardComponent } from './shared/components/user-dashboard/user-dashboard.component';
import { UserListComponent } from './shared/components/user-list/user-list.component';
import { MaterialModule } from './shared/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GetConfirmComponent } from './shared/components/get-confirm/get-confirm.component';
import { FairDashboardComponent } from './shared/components/fair-dashboard/fair-dashboard.component';
import { FairCardComponent } from './shared/components/fair-card/fair-card.component';
import { FairDetailsComponent } from './shared/components/fair-details/fair-details.component';
import { HomeComponent } from './shared/components/home/home.component';
import { RouterModule } from '@angular/router';
import { ApproutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AuthComponent } from './shared/components/auth/auth.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
 
    NavbarComponent,
    PageNotFoundComponent,
    ProductFormComponent,
    ProductDashboardComponent,
    SingleProductComponent,
    FairCardComponent,
    FairDetailsComponent,
    SingleUserComponent,
    UserFormComponent,
    UserDashboardComponent,
    UserListComponent,
    GetConfirmComponent,
    FairDashboardComponent,
    HomeComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
   RouterModule,
    MaterialModule,
    BrowserAnimationsModule,ApproutingModule,FormsModule,
    HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
