import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcriptionFormComponent } from './subcription-form.component';

describe('SubcriptionFormComponent', () => {
  let component: SubcriptionFormComponent;
  let fixture: ComponentFixture<SubcriptionFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubcriptionFormComponent]
    });
    fixture = TestBed.createComponent(SubcriptionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
