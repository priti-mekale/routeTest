import { Component, OnInit } from '@angular/core';
import { IUser } from '../../model/user';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {
userArr:IUser[]=[]
  constructor(private _UsersService:UserService,
    private _router:Router,
    private _routes:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getUsers()
  

  }
getUsers(){
this._UsersService.fetchUsers()
.subscribe({
  next:data=>{
  //  this.userArr=data.data
  this.userArr=data
  },
  error:err=>{
    console.log(err);
    
  }
})
}
}