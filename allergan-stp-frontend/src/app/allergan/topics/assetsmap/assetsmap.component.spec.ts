import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetsmapComponent } from './assetsmap.component';

describe('AssetsmapComponent', () => {
  let component: AssetsmapComponent;
  let fixture: ComponentFixture<AssetsmapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetsmapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetsmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
