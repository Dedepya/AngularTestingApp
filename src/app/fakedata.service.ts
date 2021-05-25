import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Post} from '../app/models/post.model';

@Injectable({
  providedIn: 'root'
})
export class FakedataService {

  //inject hhtpclient object

  constructor(private hc:HttpClient) { }

  getPosts():Observable<Post[]>{
    return this.hc.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
  }
  getPostById(id):Observable<Post>{
    return this.hc.get<Post>('https://jsonplaceholder.typicode.com/posts/'+id);
  }
}