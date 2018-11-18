import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksNotesComponent } from './tasks-notes.component';

describe('TasksNotesComponent', () => {
  let component: TasksNotesComponent;
  let fixture: ComponentFixture<TasksNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasksNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
