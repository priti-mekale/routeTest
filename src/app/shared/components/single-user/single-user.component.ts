import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { IUser } from '../../model/user';
import { GetConfirmComponent } from '../get-confirm/get-confirm.component';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.scss']
})
export class SingleUserComponent implements OnInit {
id !:string
userInfo!:IUser
  constructor(private _route:ActivatedRoute,
    private _router:Router,
    private _UsersService:UserService,
   private _matDialog:MatDialog
  ) { }

  ngOnInit(): void {
this.getDetails()
    
//     console.log(this._route)
//     this.id=this._route.snapshot.params['id']
//     if(this.id){
// this._UsersService.fetchUser(+this.id)
// .subscribe({
// next:data=>{
//   this.userInfo=data
// }
// })


  }

getDetails(){

  //here  params is behavoir subject hai
  this._route.params.subscribe((param:Params)=>{
    this.id=param['id']
    if(this.id){
      this._UsersService.fetchUser(+this.id)
      .subscribe({
        next:data=>{
          this.userInfo=data
        },
        error:err=>{

        }
      })
    }
    
  })
}

//     }
   goBack(){
    this._router.navigate(['users'])
  }

onRemove() {
  const matConfig = new MatDialogConfig();
  matConfig.width = '450px';
  matConfig.data = `Are you sure you want to remove user with id ${this.id}?`;

  // Open dialog
  const dialogRef = this._matDialog.open(GetConfirmComponent, matConfig);

  // After dialog close
  dialogRef.afterClosed().subscribe((result) => {
    if (result === true) {
      // Call delete API
      this._UsersService.removeUsers(this.id).subscribe({
        next: (data) => {
          console.log(data);
          this._router.navigate(['/users']);
        },
        error: (err) => {
          console.log(err);
        }
      });
    } else {
      console.log('Delete cancelled');
    }
  });
}



  }
