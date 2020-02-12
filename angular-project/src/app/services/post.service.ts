import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
//import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPost(){
    return this.http.get(this.url);
  }

  createPost(post){
    return this.http.post(this.url, JSON.stringify(post))
    .pipe(
      catchError((error: Response) => {
        if(error.status === 400){
          return throwError(new BadInput(error));
        }
        return throwError(new AppError(error));
      })
    );
  }

  updatePost(post){
    return this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true }));
  }

  deletePost(id){
    return this.http.delete(this.url + '/' + id)
    .pipe(
      catchError((error: Response) => {
        if(error.status === 404){
          return throwError(new NotFoundError(error));
        }
        return throwError(new AppError(error));
      })
    );
  }
}
