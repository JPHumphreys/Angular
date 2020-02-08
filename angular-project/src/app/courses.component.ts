//import { CoursesService } from './courses.service';
import { Component } from '@angular/core';
import { $$ } from 'protractor';

@Component({
    selector: 'courses',
    template: `
                <div (click)="onDivClicked">
                    <button (click)="onSave($event)">Save</button>
                </div>
              `
})//decorator function
export class CoursesComponent{
    onDivClicked(){
        console.log("div was clicked");
    }
    onSave($event){
        $event.stopPropogation();
        console.log("button was clicked", $event);
    }
}