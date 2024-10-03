import { Component, Input } from '@angular/core';
import { Student } from '../../model/student';
import { EstudianteComponent } from '../estudiante/estudiante.component';

@Component({
  selector: 'estudiantes',
  standalone: true,
  imports: [EstudianteComponent],
  templateUrl: './estudiantes.component.html',

})
export class EstudiantesComponent {
  @Input()students!:Student[]
}
