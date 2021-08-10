import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PointsBadgesComponent } from './points-badges.component';

describe('PointsBadgesComponent', () => {
  let component: PointsBadgesComponent;
  let fixture: ComponentFixture<PointsBadgesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointsBadgesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointsBadgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
