import { Component, OnInit } from '@angular/core';
import { Technician } from './../technician';
import { TaskNote } from './../task-note';

@Component({
  selector: 'app-tasks-notes',
  templateUrl: './tasks-notes.component.html',
  styleUrls: ['./tasks-notes.component.css']
})
export class TasksNotesComponent implements OnInit {
  action: string;
  model: TaskNote;
  stati: string[];
  types: string[];
  creationDate: any;
  technicians: Technician[];
  submitted = false;
  tasksNotes: TaskNote[];
  updatedIndex: number;

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
    this.action = 'insert';
  }

  addTaskNote(value: any) {
    this.tasksNotes.unshift(new TaskNote(value.title, value.status, value.type, new Date(), value.technicianId, value.description));
  }

  updateTaskNoteModel(taskNote: TaskNote) {
    this.model =
      new TaskNote(taskNote.title, taskNote.status, taskNote.type, taskNote.creationDate, taskNote.technicianId, taskNote.description);
    this.action = 'update';
    this.updatedIndex = this.tasksNotes.indexOf(taskNote);
  }

  deleteTaskNote(taskNote: TaskNote) {
    const index = this.tasksNotes.indexOf(taskNote);
    if (index !== -1) {
       delete this.tasksNotes[index];
    }
  }

  updateTaskNote(taskNote: TaskNote) {
    this.tasksNotes[this.updatedIndex] =
     new TaskNote (taskNote.title, taskNote.status, taskNote.type, taskNote.creationDate, taskNote.technicianId, taskNote.description);
  }

  onSubmit(model: any, action: string) {
    this.submitted = true;
    if (action === 'insert') {
      this.addTaskNote(model);
      this.model = new TaskNote('', this.stati[0], this.types[0], this.creationDate, this.technicians[0].id, '');
    } else {
      this.updateTaskNote(model);
    }
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
