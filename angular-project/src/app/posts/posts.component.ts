import { throwError } from 'rxjs';
import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
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
    }); 
  }

  createPost(input: HTMLInputElement){
    let post = { title: input.value };
    input.value = '';

    this.service.createPost(post)
    .subscribe(
      Response => {
      post['id'] = Response['id'];
      this.posts.splice(0,0,post);
      console.log(this.posts);
    },
    (error: AppError) => {
      if(error instanceof BadInput){
        //this.form.setErrors(error.originalError);
      }
      else{
        throw error;
      }
    });
  }

  updatePost(post){
    this.service.updatePost(post)
    .subscribe(
      Response => {
      console.log(Response);
    });
  }

  deletePost(post){
    this.service.deletePost(345)
    .subscribe(
      Response => {
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    },
    (error: AppError) => {//in arrow functions you need to annotate types in paranthesis
      if(error instanceof NotFoundError){
        alert('This post has already been deleted');
      }
      else{
        throw error;
      }
    });
  }

}
