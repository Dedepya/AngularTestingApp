import { Component, OnInit } from '@angular/core';
import {TestService} from '../test.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  n:number=5;

  roi=0.12;

  today=new Date();

  constructor(private tsObj:TestService) { }

  ngOnInit(): void {
    this.tsObj.setData(this.n);
  }

}
