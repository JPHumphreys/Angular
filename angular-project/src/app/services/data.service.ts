import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  //private url;

  constructor(private url:string, private http: HttpClient) { }

  getAll(){
      return this.http.get(this.url)
      .pipe(
          map(Response => Response),
        catchError( this.handleError ));
    }
  

  create(resource){
    //return throwError(new AppError());
    return this.http.post(this.url, JSON.stringify(resource))
    .pipe(
        map(Response => Response),
      catchError( this.handleError )
    );
  }

  update(resource){
    return this.http.patch(this.url + '/' + resource.id, JSON.stringify({ isRead: true }))
    .pipe(
        map(Response => Response),
      catchError( this.handleError )
    );
  }

  delete(id){

    return this.http.delete(this.url + '/' + id)
    .pipe(
        map(Response => Response),
      catchError( this.handleError )
    );
  }

  private handleError(error: Response){

    if(error.status === 400){
      return throwError(new BadInput(error));
    }
    else if(error.status === 404){
      return throwError(new NotFoundError(error));
    }
    else{
        return throwError(new AppError(error));
    }
  }

}