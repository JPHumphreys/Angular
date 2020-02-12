import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from './services/data.service';

@Injectable({
  providedIn: 'root'
})
export class GithubFollowersService extends DataService{

  constructor(http: HttpClient) {
    super('https://api.github.com/users/JPHumphreys/followers',http);
   }
}
