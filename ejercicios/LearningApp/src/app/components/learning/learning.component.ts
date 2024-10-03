import { Component, OnInit } from '@angular/core';
import { Course } from '../../model/course';
import { MallaService } from '../../services/malla.service';
import { CursoComponent } from "../curso/curso.component";
import { EstudiantesComponent } from "../estudiantes/estudiantes.component";

@Component({
  selector: 'app-learning',
  standalone: true,
  imports: [CursoComponent, EstudiantesComponent],
  templateUrl: './learning.component.html',

})
export class LearningComponent implements OnInit{
    malla!:Course;
    constructor(private service: MallaService){

    }
  ngOnInit(): void {
    this.malla=this.service.getMalla();
  }

}
