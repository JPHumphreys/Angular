//import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `
                {{course.title | uppercase}} <br/>
                {{course.students | number}} <br/>
                {{course.rating | number:'1.2-2'}} <br/>
                {{course.price | currency:'GBP':true:'3.2-2'}} <br/>
                {{course.releaseDate | date:'shortDate'}}
              `
})//decorator function
export class CoursesComponent{
    course = {
        title:"The Complete Angular Course",
        rating:4.9745,
        students:30123,
        price:190.95,
        releaseDate: new Date(2019,2,8)
    }
}