//import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `
                <img [src]="imageUrl" />
                <table>
                    <tr>
                        <td [attr.colspan]="colSpan"></td>//targeting the colSpan attribute of the html element
                    </tr>
                </table>
              `
})//decorator function
export class CoursesComponent{

    imageUrl = "http://lorempixel.com/400/200";
    colSpan = 2;
    
    
}