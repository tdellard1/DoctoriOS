import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CellPhoneImageComponent } from './cell-phone-image.component';

describe('CellPhoneImageComponent', () => {
  let component: CellPhoneImageComponent;
  let fixture: ComponentFixture<CellPhoneImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CellPhoneImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CellPhoneImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
