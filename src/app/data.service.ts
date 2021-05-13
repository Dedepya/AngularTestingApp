import { Injectable } from '@angular/core';
import { Product } from './models/product.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  private mobiles:Product[]=[

    {
    productTitle:"Samsung",
    description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore amet dolor iusto",
    productImage:"https://www.sathya.in/Media/Default/Thumbs/0038/0038136-vivo-s1-pro-black8gb-ram-128gb-storage-250.jpg"
    },
    {
    productTitle:"Samsung",
    description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore amet dolor iusto",
    productImage:"https://priceintanzania.com/wp-content/uploads/2019/04/Samsung-Galaxy-A70-Price-in-Tanzania.jpg"
    },
    
    {
    productTitle:"Honor",
    description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore amet dolor iusto",
    productImage:"https://5.imimg.com/data5/AW/IX/GLADMIN-53160395/galaxy-s-500x500.png"
    },
    
    {
    productTitle:"Iphone-11",
    description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore amet dolor iusto",
    productImage:"https://img.tatacliq.com/images/i7/1348Wx2000H/MP000000005562292_1348Wx2000H_202011300234051.jpeg"
    },
    
    {
    productTitle:"OnePlus",
    description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore amet dolor iusto",
    productImage:"https://670354.smushcdn.com/2260778/wp-content/uploads/2021/03/AMZ101-2.jpg"
    },
    
    {
    productTitle:"Google pixel",
    description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore amet dolor iusto",
    productImage:"https://www.91-img.com/pictures/105546-v1-google-pixel-xl-mobile-phone-large-1.jpg"
    }
    
    ];

    getMobilesData():Product[]{
      return this.mobiles;
    }

    private bikes:Product[]=[

      {
      productTitle:"Samsung",
      description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore amet dolor iusto",
      productImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1cBBSSS0f8x3YWyS0VWxRam_u5JgCVzUKPA&usqp=CAU"},
      {
      productTitle:"Samsung",
      description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore amet dolor iusto",
      productImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQcTMe-x_h2SDN8EbP2FZcE2Ntkw7OY75TA&usqp=CAU"},
      
      {
      productTitle:"Honor",
      description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore amet dolor iusto",
      productImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN5m7f5hbzbTxAkfTffQrIgTthUhc4k92wDw&usqp=CAU"},
      
      {
      productTitle:"Iphone-11",
      description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore amet dolor iusto",
      productImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcZvwj3JaJeKVa0hkgVTGLrPLt2uBDRVCpCg&usqp=CAU"
      },
      
      {
      productTitle:"OnePlus",
      description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore amet dolor iusto",
      productImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDWGwShTD-RH1PsesEwgcBA5FJtEe8SEPulg&usqp=CAU"
      },
      
      {

      productTitle:"Google pixel",
      description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore amet dolor iusto",
      productImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-TebihNMQjp3DQgKhw_qB5M7-NCxMjd0ugA&usqp=CAU"
      }
      
      ];

      getBikesData():Product[]{
        return this.bikes;
      }
}
