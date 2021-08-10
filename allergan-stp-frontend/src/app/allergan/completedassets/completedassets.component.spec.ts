import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedassetsComponent } from './completedassets.component';

describe('CompletedassetsComponent', () => {
  let component: CompletedassetsComponent;
  let fixture: ComponentFixture<CompletedassetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletedassetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedassetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
