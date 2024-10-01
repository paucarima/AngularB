import { Component, OnInit } from '@angular/core';
import { Course } from '../../model/course';
import { MallaService } from '../../services/malla.service';

@Component({
  selector: 'app-learning',
  standalone: true,
  imports: [],
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
