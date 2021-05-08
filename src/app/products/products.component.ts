import { Component, OnInit } from '@angular/core';
import {Product} from '../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent{
  products:Product[]=[

    {
    productTitle:"Technology-1",
    description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore amet dolor iusto",
    productImage:"https://apicms.thestar.com.my/uploads/images/2020/08/24/831125.jpg"
    },
    {
    productTitle:"Technology-2",
    description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore amet dolor iusto",
    productImage:"https://thumbs.dreamstime.com/b/new-skills-knowledge-webinar-training-business-internet-technology-concept-new-skills-knowledge-webinar-training-business-internet-121274023.jpg"
    },
    
    {
    productTitle:"Technology-3",
    description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore amet dolor iusto",
    productImage:"https://itconsultingindubai.files.wordpress.com/2016/03/choosing-a-technology-solution.jpg"
    },
    
    {
    productTitle:"Technology-4",
    description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore amet dolor iusto",
    productImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLbX-qnGMyf2NGxT7pzQsBTBmJNxjR5zw7MA&usqp=CAU"
    },
    {
    productTitle:"Technology-5",
    description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore amet dolor iusto",
    productImage:"https://apicms.thestar.com.my/uploads/images/2020/08/24/831125.jpg"
      },
      {
      productTitle:"Technology-2",
      description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore amet dolor iusto",
      productImage:"https://thumbs.dreamstime.com/b/new-skills-knowledge-webinar-training-business-internet-technology-concept-new-skills-knowledge-webinar-training-business-internet-121274023.jpg"
      },
      
      {
      productTitle:"Technology-3",
      description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore amet dolor iusto",
      productImage:"https://itconsultingindubai.files.wordpress.com/2016/03/choosing-a-technology-solution.jpg"
      },
    {
    productTitle:"Technology-8",
    description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore amet dolor iusto",
    productImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLbX-qnGMyf2NGxT7pzQsBTBmJNxjR5zw7MA&usqp=CAU"
    }];

    productsSentByChild=[];
    productCount:number=0;

    getProductDetailsFromChild(productTitle){
      this.productsSentByChild.push(productTitle);
      this.productCount++;
    }
}