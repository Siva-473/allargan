import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreProductTrainingComponent } from './core-product-training.component';

describe('CoreProductTrainingComponent', () => {
  let component: CoreProductTrainingComponent;
  let fixture: ComponentFixture<CoreProductTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreProductTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreProductTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
