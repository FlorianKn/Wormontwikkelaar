import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceCompletionListComponent } from './service-completion-list.component';

describe('ServiceCompletionListComponent', () => {
  let component: ServiceCompletionListComponent;
  let fixture: ComponentFixture<ServiceCompletionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceCompletionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceCompletionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
