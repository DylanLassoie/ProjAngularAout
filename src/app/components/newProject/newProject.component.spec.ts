import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProjectComponent } from './newProject.component';

describe('NewProjectComponent', () => {
  let component: NewProjectComponent;
  let fixture: ComponentFixture<NewProjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewProjectComponent]
    });
    fixture = TestBed.createComponent(NewProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
