import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnassinedAssetsComponent } from './unassined-assets.component';

describe('UnassinedAssetsComponent', () => {
  let component: UnassinedAssetsComponent;
  let fixture: ComponentFixture<UnassinedAssetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnassinedAssetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnassinedAssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
