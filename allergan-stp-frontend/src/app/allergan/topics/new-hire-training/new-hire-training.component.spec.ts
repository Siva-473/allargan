import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewHireTrainingComponent } from './new-hire-training.component';

describe('NewHireTrainingComponent', () => {
  let component: NewHireTrainingComponent;
  let fixture: ComponentFixture<NewHireTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewHireTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewHireTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
