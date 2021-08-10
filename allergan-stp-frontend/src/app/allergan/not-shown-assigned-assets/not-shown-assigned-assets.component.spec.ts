import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotShownAssignedAssetsComponent } from './not-shown-assigned-assets.component';

describe('NotShownAssignedAssetsComponent', () => {
  let component: NotShownAssignedAssetsComponent;
  let fixture: ComponentFixture<NotShownAssignedAssetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotShownAssignedAssetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotShownAssignedAssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
