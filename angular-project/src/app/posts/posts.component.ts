import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any;
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient){
    
  }
  
  ngOnInit(){
    this.http.get(this.url)
    .subscribe(Response =>{
      this.posts = Response;
      //console.log(this.posts);
    }); //similar to onload - when ready we will be notified
  }

  createPost(input: HTMLInputElement){
    let post = {
      title: input.value
    };
    input.value = '';
    this.http.post(this.url, JSON.stringify(post))
    .subscribe(Response => {
      post['id'] = Response['id'];
      this.posts.splice(0,0,post);
      console.log(this.posts);
    });
  }

  updatePost(post){

    this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true }))
    .subscribe(Response => {
      console.log(Response);
    });
  }

  deletePost(post){
    this.http.delete(this.url + '/' + post.id)
    .subscribe(Response => {
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    });
  }

}
