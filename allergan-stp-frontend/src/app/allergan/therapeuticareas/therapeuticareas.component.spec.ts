import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TherapeuticareasComponent } from './therapeuticareas.component';

describe('TherapeuticareasComponent', () => {
  let component: TherapeuticareasComponent;
  let fixture: ComponentFixture<TherapeuticareasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TherapeuticareasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TherapeuticareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
