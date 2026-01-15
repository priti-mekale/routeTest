import { inject, Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";


@Injectable({
    providedIn:'root'
})


export class AuthGaurd implements CanActivate ,CanActivateChild {
 private _router =inject (Router)
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        
    if(localStorage.getItem('token')){
        return true
    }
    else{
        return this._router.createUrlTree([''])
    }
    }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        if(localStorage.getItem('token')){
            return true
        }
        else{
            return this._router.createUrlTree([''])
        }
    }



}