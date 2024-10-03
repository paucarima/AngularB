import { Component, Input } from '@angular/core';
import { Course } from '../../model/course';
import { Student } from '../../model/student';

@Component({
  selector: 'tr[estudiante-item]',
  standalone: true,
  imports: [],
  templateUrl: './estudiante.component.html',

})
export class EstudianteComponent {
  @Input()item!:Student
}
