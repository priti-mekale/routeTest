import { Component, Input, OnInit } from '@angular/core';
import { IFair } from '../../model/fair';

@Component({
  selector: 'app-fair-card',
  templateUrl: './fair-card.component.html',
  styleUrls: ['./fair-card.component.scss']
})
export class FairCardComponent implements OnInit {

 @Input() fairObj !:IFair
  constructor() { }

  ngOnInit(): void {
  }

}
