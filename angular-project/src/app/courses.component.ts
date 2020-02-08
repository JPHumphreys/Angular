//import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `
                <input [(ngModel)]='email' (keyup.enter)="onKeyUp()"/>
              `
})//decorator function
export class CoursesComponent{

    email = "me@example.com";
    
    onKeyUp(){
        console.log(this.email);
    }
}