import { NgModule } from "@angular/core";

import {  RouterModule, Routes } from "@angular/router";






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
    path: 'student',
    component: StudentDashboardComponent,
    canActivate: [AuthGaurd]
  },

  {
    path: 'todos',
    component: TodoDashboardComponent,
    canActivate: [AuthGaurd]
  },

  {
    path: 'fairs',
    component: FairsDashboardComponent,
    canActivate: [AuthGaurd, UserRoleGAurd],
    canActivateChild: [AuthGaurd, UserRoleGAurd],
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
    component: Product1Component,
    resolve:{ 
productArr:ProductsResolver
    },
    // canActivate: [AuthGaurd, UserRoleGAurd],
    // canActivateChild: [AuthGaurd, UserRoleGAurd],
    data: {
      UserRole: ['admin', 'superAdmin']
    },
    children: [
      {
        path: 'addProducts',
        component: ProductFromComponent
      },
      {
        path: ':productId',
        component: SproductComponent,
        resolve:{
          product:ProductsResolver
        }
      },
      {
        path: ':productId/edit',
        component: ProductFromComponent,
        canDeactivate:[UnsavedChangesGuard]
      }
    ]
  },

  {
    path: 'users',
    component: UsersComponent,
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
        canDeactivate:[UnsavedChangesGuard]
      },
      {
        path: ':id',
        component: UserComponent
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


































































