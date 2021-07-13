import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { Profile } from '../models/profile.model';

@Component({
  selector: 'app-addnewprofile',
  templateUrl: './addnewprofile.component.html',
  styleUrls: ['./addnewprofile.component.css']
})
export class AddnewprofileComponent implements OnInit {

  constructor(private dsObj:DataService,private router:Router) { }

  ngOnInit(): void {
    
  }

  profileModel=new Profile('','','','');

  onSubmitNewProfile(){
    
      this.dsObj.createNewProfile(this.profileModel).subscribe(
        res=>{
          //navigate to viewprofiles component
          this.router.navigateByUrl("products/profiles")

        },
        err=>{
          console.log('err in creating new profile',err)
        }
      )
  }
}