import { Component, Input, EventEmitter, Output} from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../models/product.model';
import { ProfilesComponent } from '../profiles/profiles.component';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent  {

  profiles:Product[]=[];

  //to receive data from parent as input
  @Input() productObj:Product;

  //create a custom event
  @Output() myEvent=new EventEmitter();


  sendProductDetailsToParent(profileTitle){
      //emit data to parent
      this.myEvent.emit(profileTitle);
  }

  constructor(private dsObj:DataService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.dsObj.getProfilesData().subscribe(
      res=>{
        this.profiles=res;
      },
      err=>{
        console.log("err in reading products",err)
      }
    )
  }

  deleteProfile(profileObj){
   
    console.log("mobile to delete",profileObj.id)
    this.dsObj.deleteProfile(profileObj.id).subscribe(
      res=>{
        //write getting latest data from API
        this.getUsers();
        alert("Profile deleted")
      },
      err=>{
        console.log("err in delete profile",err)
      }
    )
  }


}
