import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',

})
export class UserComponent {
  name:string='Nathaly';
  age:number=18 ;      
}
