import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldToolTrainingComponent } from './field-tool-training.component';

describe('FieldToolTrainingComponent', () => {
  let component: FieldToolTrainingComponent;
  let fixture: ComponentFixture<FieldToolTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldToolTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldToolTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
