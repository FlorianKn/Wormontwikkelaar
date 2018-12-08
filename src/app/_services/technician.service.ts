import { Injectable } from '@angular/core';
import { User } from '../_models/User';
import { Technicians } from './mock-technician';

@Injectable({
  providedIn: 'root'
})
export class TechnicianService {

  constructor() { }

  getTechnicians(): User[] {
    return Technicians;
  }
}
