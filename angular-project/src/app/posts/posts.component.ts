import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any;

  constructor(private service: PostService){
    
  }
  
  ngOnInit(){
    this.service.getPost()
    .subscribe(
      Response =>{
      this.posts = Response;
    },
    error => {
      alert('An unexpected error occured.');//use toasts instead
      console.log(error);
    }); 
  }

  createPost(input: HTMLInputElement){
    let post = {
      title: input.value
    };
    input.value = '';
    this.service.createPost(post)
    .subscribe(
      Response => {
      post['id'] = Response['id'];
      this.posts.splice(0,0,post);
      console.log(this.posts);
    },
    error => {
      alert('An unexpected error has occured.');
      console.log(error);
    });
  }

  updatePost(post){
    this.service.updatePost(post)
    .subscribe(
      Response => {
      console.log(Response);
    },
    error => {
      alert('An unexpected error has occured.');
      console.log(error);
    });
  }

  deletePost(post){
    this.service.deletePost(post.id)
    .subscribe(
      Response => {
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    },
    error => {
      alert('An unexpected error has occured.');
      console.log(error);
    });
  }

}
