import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent  {
  posts: any;

  constructor(http: HttpClient){
    http.get('https://jsonplaceholder.typicode.com/posts')
    .subscribe(Response =>{
      this.posts = Response;
      //console.log(this.posts);
    }) //similar to onload - when ready we will be notified
  }

}
