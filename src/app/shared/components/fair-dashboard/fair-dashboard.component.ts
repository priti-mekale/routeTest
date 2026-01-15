import { Component, OnInit } from '@angular/core';
import { FairService } from '../../services/fair.service';
import { IFair } from '../../model/fair';
import { SnackbarService } from '../../services/snackbar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fair-dashboard',
  templateUrl: './fair-dashboard.component.html',
  styleUrls: ['./fair-dashboard.component.scss']
})
export class FairDashboardComponent implements OnInit {
fairArr:IFair[]=[]
  constructor(private _FairsService:FairService,
    private _snackbar :SnackbarService,
    private _router:Router,

  ) { }

  ngOnInit(): void {
    this.getFairs()
    this._router.navigate(['fairs', this.fairArr[0].id]);

  }

  getFairs(){
this._FairsService.fetchFairs()
.subscribe({
  next:(data: IFair[])=>{
    this.fairArr=data
  },
  error:(err: string)=>{
  this._snackbar.openSnackbar(err)
  }
})
  }
}
