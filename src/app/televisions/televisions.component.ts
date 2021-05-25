import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import { Product } from '../models/product.model';
import {TestService} from '../test.service'

@Component({
  selector: 'app-televisions',
  templateUrl: './televisions.component.html',
  styleUrls: ['./televisions.component.css']
})
export class TelevisionsComponent implements OnInit {

  ngOnInit(){

    }

}