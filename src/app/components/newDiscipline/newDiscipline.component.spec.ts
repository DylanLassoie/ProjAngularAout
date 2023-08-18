import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDisciplineComponent } from './newDiscipline.component';

describe('NewDisciplineComponent', () => {
  let component: NewDisciplineComponent;
  let fixture: ComponentFixture<NewDisciplineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewDisciplineComponent]
    });
    fixture = TestBed.createComponent(NewDisciplineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
