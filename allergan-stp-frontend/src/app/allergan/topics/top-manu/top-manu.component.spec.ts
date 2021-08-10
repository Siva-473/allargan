import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopManuComponent } from './top-manu.component';

describe('TopManuComponent', () => {
  let component: TopManuComponent;
  let fixture: ComponentFixture<TopManuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopManuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopManuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
