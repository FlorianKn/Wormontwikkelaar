import { Component, OnInit } from '@angular/core';
import { TaskNote } from './../task-note';
import { TasksNotes } from './../mock-taskNote';
import { Status } from './../mock-taskNote';
import { Type } from './../mock-taskNote';
import { AuthenticationService } from './../_services/authentication.service';
import { User } from './../_models/user';

@Component({
  selector: 'app-tasks-notes',
  templateUrl: './tasks-notes.component.html',
  styleUrls: ['./tasks-notes.component.css']
})
export class TasksNotesComponent implements OnInit {
  action: String;
  model: TaskNote;
  stati: String[];
  types: String[];
  creationDate: any;
  technician: User;
  submitted = false;
  tasksNotes: TaskNote[];
  updatedIndex: number;

  constructor(public authservice: AuthenticationService) {
    this.authservice.currentUser.subscribe(user => {
      this.technician = user;
    });
    this.stati = Status;
    this.types = Type;
    this.tasksNotes = TasksNotes;
  }

  ngOnInit() {
    // load task notes from db and technicians
    this.creationDate = new Date();
    this.addNewTaskNoteModel();
  }

  addTaskNote(value: any) {
    this.tasksNotes.unshift(new TaskNote(value.title, value.status, value.type, new Date(), value.description, this.technician.id));
  }

  updateTaskNoteModel(taskNote: TaskNote) {
    this.model =
      new TaskNote(taskNote.title, taskNote.status, taskNote.type, taskNote.creationDate,
       taskNote.description, this.technician.id);
       console.log(this.model);
    this.action = 'update';
    this.updatedIndex = this.tasksNotes.indexOf(taskNote);
  }
  addNewTaskNoteModel() {
    this.model = new TaskNote('', this.stati[0], this.types[0], this.creationDate, '', this.technician.id);
    console.log(this.model);
    this.action = 'insert';
  }

  deleteTaskNote(taskNote: TaskNote) {
    const index = this.tasksNotes.indexOf(taskNote);
    if (index !== -1) {
      delete this.tasksNotes[index];
    }
  }

  updateTaskNote(taskNote: TaskNote) {
    this.tasksNotes[this.updatedIndex] =
      new TaskNote(taskNote.title, taskNote.status, taskNote.type, taskNote.creationDate, taskNote.description, this.technician.id);
  }

  onSubmit(model: any, action: string) {
    this.submitted = true;
    if (action === 'insert') {
      this.addTaskNote(model);
      this.model = new TaskNote('', this.stati[0], this.types[0], this.creationDate, '', this.technician.id);
    } else {
      this.updateTaskNote(model);
    }
  }

  CountTaskNotes2Status(status: string) {
    return status === 'Finished' ? 10 : this.tasksNotes.filter(s => s.status === status).length;
  }

  getTaskNotesByStatus(status: string) {
    let res = this.tasksNotes.filter(s => s.status === status).sort((a: TaskNote, b: TaskNote) => {
      const sortRes = new Date(a.creationDate).getTime() < new Date(b.creationDate).getTime() ? 1 :
       new Date(a.creationDate).getTime() > new Date(b.creationDate).getTime() ? -1 : 0;
      return sortRes;
    });
    if (status === 'Finished' && res.length > 10) {
      res = res.slice(0, 10);
    }
    return res;
  }
  formatDate(date) {
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
}

