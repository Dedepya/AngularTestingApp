import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';
import { FakedataService } from '../fakedata.service';
import {Post} from '../models/post.model';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {

  mySub:Subscription;
  myPosts:Post[]=[];
  users;

  //inject fakedata service object
  constructor(private fsObj:FakedataService,private router:Router) { }

  ngOnInit(): void {
    this.mySub=this.fsObj.getPosts().subscribe(
    userData=>{
      this.users=userData

    },
    err=>{
      console.log("err is",err)
    })
  }


  onSelectId(id){
    this.router.navigateByUrl('testing/'+id)

  }


  ngOnDestroy(){
    this.mySub.unsubscribe();
  }


}