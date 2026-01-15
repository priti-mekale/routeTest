import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IUser, UserRole } from '../../model/user';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { UuidService } from '../../services/uuid.service';
import { SnackbarService } from '../../services/snackbar.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
 @ViewChild('userForm')userForm!:NgForm
  isInEditMode :boolean=false
userInfo!:IUser
  id!:string
 roles = Object.values(UserRole);
 
  constructor( private _routs:ActivatedRoute,
    private _router:Router,
    private _UsersService:UserService,
    private _uuid:UuidService,
    private _SnackbarService:SnackbarService
  ) { }

  ngOnInit(): void {
 this.getAllDetails()
  }
  getAllDetails(){
       this.id = this._routs.snapshot.params['id'];
// console.log(this._routs.snapshot.params['id']);

    if (this.id) {
      this.isInEditMode = true;

      this._UsersService.fetchUser(+this.id).subscribe({
        next: (data) => {
this.userInfo=data
setTimeout(()=>{
 this.userForm.form.patchValue(data); 
},0)
         
        }
      });
    }
  }
onSubmit(){
  if(this.userForm.valid){
    let User_Obj:IUser={
      ...this.userForm.value,
      id:this._uuid.Uuid()
    }
    this._UsersService.createUsers(User_Obj)
    .subscribe({
      next:data=>{
        // snackbar
        this._SnackbarService.openSnackbar(`The User Added Successfully`)
        this._router.navigate(['/users'])
      }
    })
  }
}

onUpdate() {
  if (this.userForm.valid) {

    const updateObj: IUser = {
      ...this.userForm.value,
      id: +this.id   
    };

    this._UsersService.updateUsers(updateObj).subscribe({
      next: (data) => {
        this._SnackbarService.openSnackbar(`The User Udated+ Successfully`)
        this._router.navigate(['/users']);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}

canDeactivate() {
  if (this.userForm.dirty && this.isInEditMode) {
    return confirm('Are you sure you want to discard changes?');
  }
  return true;
}


}