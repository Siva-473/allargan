import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreDiseaseTrainingComponent } from './core-disease-training.component';

describe('CoreDiseaseTrainingComponent', () => {
  let component: CoreDiseaseTrainingComponent;
  let fixture: ComponentFixture<CoreDiseaseTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreDiseaseTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreDiseaseTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
