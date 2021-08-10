import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalMeetingsComponent } from './medical-meetings.component';

describe('MedicalMeetingsComponent', () => {
  let component: MedicalMeetingsComponent;
  let fixture: ComponentFixture<MedicalMeetingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalMeetingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalMeetingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
