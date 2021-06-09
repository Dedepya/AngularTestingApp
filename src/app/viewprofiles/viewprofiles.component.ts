import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-viewprofiles',
  templateUrl: './viewprofiles.component.html',
  styleUrls: ['./viewprofiles.component.css']
})
export class ViewprofilesComponent implements OnInit {

   searchTerm:string;

  profiles:Product[]=[];

    //inject obj of DataService class
    constructor(private dsObj:DataService){
    }
 
    ngOnInit(){
      
      this.dsObj.getProfilesData().subscribe(
        data=>{
          this.profiles=data;
        },
        err=>{
          console.log("err is ",err)
        }
        )

    }

}