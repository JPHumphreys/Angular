import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class FavouriteComponent {

  @Input('isFavourite') isSelected: boolean;
  @Output('change') click = new EventEmitter();

  onClick(){
    this.isSelected = !this.isSelected; //toggle
    this.click.emit({ newValue: this.isSelected}); //notfiy that something has happened
    //prints object with a variable called newValue that is true or false
  }

}
export interface FavChangedEventArgs{
  newValue:boolean
}
