import { NgModule } from "@angular/core";

import {  RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./shared/components/auth/auth.component";
import { HomeComponent } from "./shared/components/home/home.component";
import { AuthGaurd } from "./shared/services/auth.guard";
import { FairDashboardComponent } from "./shared/components/fair-dashboard/fair-dashboard.component";
import { FairDetailsComponent } from "./shared/components/fair-details/fair-details.component";
import { ProductDashboardComponent } from "./shared/components/product-dashboard/product-dashboard.component";
import { ProductFormComponent } from "./shared/components/product-form/product-form.component";
import { SingleProductComponent } from "./shared/components/single-product/single-product.component";
import { UserDashboardComponent } from "./shared/components/user-dashboard/user-dashboard.component";
import { UserFormComponent } from "./shared/components/user-form/user-form.component";
import { SingleUserComponent } from "./shared/components/single-user/single-user.component";
import { PageNotFoundComponent } from "./shared/components/page-not-found/page-not-found.component";






const appRoutes: Routes = [

  {
    path: '',
    component: AuthComponent   // login
  },

  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGaurd]
  },

  
 
  {
    path: 'fairs',
    component: FairDashboardComponent,
    canActivate: [AuthGaurd],
    canActivateChild: [AuthGaurd],
    data: {
      UserRole: ['buyer', 'admin', 'superAdmin']
    },
    children: [
      {
        path: ':id',
        component: FairDetailsComponent
      }
    ]
  },

  {
    path: 'products',
    component: ProductDashboardComponent,
//     resolve:{ 
// productArr:ProductsResolver
//     },
    // canActivate: [AuthGaurd, UserRoleGAurd],
    // canActivateChild: [AuthGaurd, UserRoleGAurd],
    data: {
      UserRole: ['admin', 'superAdmin']
    },
    children: [
      {
        path: 'addProducts',
        component: ProductFormComponent
      },
      {
        path: ':productId',
        component: SingleProductComponent,
        // resolve:{
        //   product:ProductsResolver
        // }
      },
      {
        path: ':productId/edit',
        component: ProductFormComponent,
        // canDeactivate:[UnsavedChangesGuard]
      }
    ]
  },

  {
    path: 'users',
    component: UserDashboardComponent,
    canActivate: [AuthGaurd],
    canActivateChild: [AuthGaurd],
    children: [
      {
        path: 'addUser',
        component: UserFormComponent
      },
      {
        path: ':id/editUser',
        component: UserFormComponent,
        // canDeactivate:[UnsavedChangesGuard]
      },
      {
        path: ':id',
        component: SingleUserComponent
      }
    ]
  },

  {
    path: 'page-not-found',
    component: PageNotFoundComponent,
    data: {
      msg: 'page not found msg using static data...'
    }
  },

  {
    path: '**',
    redirectTo: 'page-not-found'
  }
];



// 2    @NgModule:-Decorator that marks a class as an NgModule and supplies configuration metadata.
@NgModule({
    // is for root module
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[]
})
//1
export class ApproutingModule{

}


































































