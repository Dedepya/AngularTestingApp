import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit{

  ngOnInit(){
  }
}
