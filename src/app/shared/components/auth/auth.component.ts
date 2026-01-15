import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { SnackbarService } from '../../services/snackbar.service';
import { Router } from '@angular/router';
import { Iregister, IuserLogin } from '../../model/auth';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
isAllReadyAccount:boolean=false
  constructor(
    private _AuthService:AuthService,
    private _SnackbarService:SnackbarService,
    private _router:Router
    
  ) { }
@ViewChild('loginForm')loginForm!:NgForm
@ViewChild('signupForm')signupForm!:NgForm
  ngOnInit(): void {
  }
onLogin(){
  if(this.loginForm.valid){
    let userDetails:IuserLogin= this.loginForm.value
    console.log(userDetails);
    this._AuthService.login(userDetails)
    .subscribe({
      next:res=>{
console.log(res);
this._SnackbarService.openSnackbar(res.msg ||  'Login Successfully')
this._AuthService.saveToken(res.token)
// this._AuthService.saveUserRole(res['userRole'])
this._AuthService.saveUserRole(res.userRole)

this.loginForm.reset()

// this.isAllReadyAccount=true
 this._router.navigate(['home'])
      },
      error:err=>{
this._SnackbarService.openSnackbar(err.error.error || err.error.message||"login failled")
      }
    })
   
  }

}
 
onSignUp(){
  if(this.signupForm.valid){
    let userDetails:Iregister=this.signupForm.value
    this._AuthService.register(userDetails)
    .subscribe({
      next:res=>{
console.log(res);
this._SnackbarService.openSnackbar(res.msg)


this.signupForm.reset()
this.isAllReadyAccount=true
      },
      error:err=>{
this._SnackbarService.openSnackbar(err.error.error || err.error.message)
      }
    })
  }
}

}

