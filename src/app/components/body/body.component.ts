import { Component } from '@angular/core';


@Component({
    selector: 'app-body',
    templateUrl: `./body.component.html`
})

export class BodyComponent{
    show=false
    course:any = {
        professor: 'Pepito',
        name:'Mobile'
    };
    students: string []= ['Pepito','Carlos','Paula'];
}
