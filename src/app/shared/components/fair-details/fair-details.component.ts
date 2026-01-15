import { Component, OnInit } from '@angular/core';
import { IFair } from '../../model/fair';
import { ActivatedRoute } from '@angular/router';
import { FairService } from '../../services/fair.service';

@Component({
  selector: 'app-fair-details',
  templateUrl: './fair-details.component.html',
  styleUrls: ['./fair-details.component.scss']
})
export class FairDetailsComponent implements OnInit {
 fairDetails !:IFair ;

  constructor( private _route:ActivatedRoute,
    private _fairsService:FairService

  ) { }

  ngOnInit(): void {
    this.getFairsDetails()
  }

  getFairsDetails(){
this._route.paramMap.subscribe( params=>{
  let id=params.get('id')
  // this._fairsService.getFair(id)
  if(id){
     this._fairsService.getFair(id)
     .subscribe({
      next:(data: IFair)=>{
        this.fairDetails=data
        
      }
     })
  }
 
})

  }

}
