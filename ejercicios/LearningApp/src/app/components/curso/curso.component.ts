import { Component, Input } from '@angular/core';
import { Course } from '../../model/course';

@Component({
  selector: 'curso',
  standalone: true,
  imports: [],
  templateUrl: './curso.component.html',

})
export class CursoComponent {
  @Input()malla!:Course
}
