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
    this.service.getAll()
    .subscribe( posts => this.posts = posts); 
  }

  createPost(input: HTMLInputElement){
    let post = { title: input.value };
    this.posts.splice(0,0,post);//optimistic

    input.value = '';

    this.service.create(post)
    .subscribe(
      newPost => {
      post['id'] = newPost['id'];
    },
    (error: AppError) => {
      this.posts.splice(0,1);//remove the optimistic item if error from server

      if(error instanceof BadInput){
        //this.form.setErrors(error.originalError);
      }
      else{
        throw error;
      }

    });
  }

  updatePost(post){
    this.service.update(post)
    .subscribe(
      updatedPost => {
      console.log(updatedPost);
    });
  }

  deletePost(post){
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1);
    this.service.delete(post.id)
    .subscribe(
      null,
    (error: AppError) => {//in arrow functions you need to annotate types in paranthesis
      this.posts.splice(index, 0, post);

      if(error instanceof NotFoundError){
        alert('This post has already been deleted');
      }
      else{
        throw error;
      }
    });
  }

}
