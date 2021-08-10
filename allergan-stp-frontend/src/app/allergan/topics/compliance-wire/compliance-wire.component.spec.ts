import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplianceWireComponent } from './compliance-wire.component';

describe('ComplianceWireComponent', () => {
  let component: ComplianceWireComponent;
  let fixture: ComponentFixture<ComplianceWireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplianceWireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplianceWireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
