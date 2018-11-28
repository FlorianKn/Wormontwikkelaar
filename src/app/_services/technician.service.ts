import { Injectable } from '@angular/core';
import { Technician } from '../technician';
import { Technicians } from './mock-technician';

@Injectable({
  providedIn: 'root'
})
export class TechnicianService {

  constructor() { }

  getTechnicians(): Technician[] {
    return Technicians;
  }
}
