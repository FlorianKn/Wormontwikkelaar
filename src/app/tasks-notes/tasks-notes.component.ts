import { Component, OnInit } from '@angular/core';
import { Technician } from './../technician';
import { TaskNote } from './../task-note';

@Component({
  selector: 'app-tasks-notes',
  templateUrl: './tasks-notes.component.html',
  styleUrls: ['./tasks-notes.component.css']
})
export class TasksNotesComponent implements OnInit {
  model: TaskNote;
  stati: string[];
  types: string[];
  creationDate: any;
  technicians: Technician[];
  submitted = false;
  tasksNotes: TaskNote[];
  lastInsertIndex: number;

  constructor() {
    this.stati = ['Open', 'InProgress', 'Finished'];
    this.types = ['Task', 'Note'];
    this.technicians = [{
      id: 1,
      email: 'max.mustermann@gmail.com',
      firstName: 'Max',
      lastName: 'Mustermann',
      password: 'password',
      phoneNr: '0176234234234'
    }, {
      id: 2,
      email: 'martin.schmitt@gmail.com',
      firstName: 'Martin',
      lastName: 'Schmitt',
      password: 'password',
      phoneNr: '0176456564566'
    }, {
      id: 3,
      email: 'lena.meier@gmail.com',
      firstName: 'Lena',
      lastName: 'Meier',
      password: 'password',
      phoneNr: '01769867867345'
    }];
    this.tasksNotes = [];
  }

  ngOnInit() {
    // load task notes from db and technicians
    this.creationDate = formatDate(new Date());
    this.model = new TaskNote('', this.stati[0], this.types[0], this.creationDate, this.technicians[0].id, '');
  }

  addTaskNote(value: any) {
    this.tasksNotes.push(new TaskNote(value.title, value.status, value.type, new Date(), value.technicianId, value.description));
    this.lastInsertIndex = this.tasksNotes.length - 1;
  }

  updateTaskNote(taskNote: TaskNote) {
    this.deleteTaskNote(taskNote);
    this.model =
      new TaskNote(taskNote.title, taskNote.status, taskNote.type, taskNote.creationDate, taskNote.technicianId, taskNote.description);
  }

  deleteTaskNote(taskNote: TaskNote) {
    const index = this.tasksNotes.indexOf(taskNote);
    if (index !== -1) {
       delete this.tasksNotes[index];
    }
  }

  onSubmit(model: any) {
    this.submitted = true;
    this.addTaskNote(model);
    this.model = new TaskNote('', this.stati[0], this.types[0], this.creationDate, this.technicians[0].id, '');
    // need to update model
  }

  CountTaskNotes2Status(status: string) {
    return this.tasksNotes.filter(s => s.status === status).length;
  }

  getTaskNotesByStatus(status: string) {
    return this.tasksNotes.filter(s => s.status === status);
  }
}

function formatDate(date) {
  const d = new Date(date);
  let month = '' + (d.getMonth() + 1),
    day = '' + d.getDate();
  const year = d.getFullYear();

  if (month.length < 2) {
    month = '0' + month;
  }
  if (day.length < 2) {
    day = '0' + day;
  }
  return [year, month, day].join('-');
}
