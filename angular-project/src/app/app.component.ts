import { Component } from '@angular/core';
import { FavChangedEventArgs } from './favourite/favourite.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
    title: "Title",
    isFavourite: true
  }

  onFavouriteChanged(eventArgs: FavChangedEventArgs){
    console.log("favourite changed", eventArgs);
  }
  
}
