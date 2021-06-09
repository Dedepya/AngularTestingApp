import { Injectable } from '@angular/core';
import { Product } from './models/product.model';
import { ProductsComponent } from './products/products.component';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs'
import { Profile } from './models/profile.model';

@Injectable({
  providedIn: 'root'
})


export class DataService {

  //inject HttpClient service object
  constructor(private hc:HttpClient) { }


  //to read all profiles data
    getProfilesData():Observable<Profile[]>{
        //http get
       return this.hc.get<Profile[]>("http://localhost:3000/profiles")
    }
    //to save & create new profile
    createNewProfile(profileObj):Observable<any>{
      return this.hc.post("http://localhost:3000/profiles",profileObj)
    }
    //to check login status
    userLoginStatus():boolean{
      if(localStorage.getItem("username")==null){
        return false;
      }
      else{
        return true;
      }
    }

    //logout
    userLogout(){
      localStorage.clear();
    }
}