import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css']
})
export class BikesComponent implements OnInit{


  ngOnInit(){
    }
}
