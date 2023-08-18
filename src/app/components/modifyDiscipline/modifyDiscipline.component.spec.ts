import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyDisciplineComponent } from './modifyDiscipline.component';

describe('ModifyDisciplineComponent', () => {
  let component: ModifyDisciplineComponent;
  let fixture: ComponentFixture<ModifyDisciplineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifyDisciplineComponent]
    });
    fixture = TestBed.createComponent(ModifyDisciplineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
