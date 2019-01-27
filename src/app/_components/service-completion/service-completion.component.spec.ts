import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceCompletionComponent } from './service-completion.component';

describe('ServiceCompletionComponent', () => {
  let component: ServiceCompletionComponent;
  let fixture: ComponentFixture<ServiceCompletionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceCompletionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceCompletionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
