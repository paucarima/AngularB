import { Injectable } from '@angular/core';
import { Course } from '../model/course';
import { mallaData } from '../../data/malla.data';

@Injectable({
  providedIn: 'root'
})
export class MallaService {
  private malla: Course=mallaData;
  constructor() { }

  getMalla():Course{
    return this.malla;
  }
}
