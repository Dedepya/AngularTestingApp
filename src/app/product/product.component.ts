import { Component, Input,EventEmitter, Output } from '@angular/core';
import {Product} from '../models/product.model'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() productObj:Product;
  @Output() myEvent= new EventEmitter();

  sendProductDetailsToParent(productTitle){
    this.myEvent.emit(productTitle);
  }
}
