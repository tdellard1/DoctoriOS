import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyDeleteFormComponent } from './modify-delete-form.component';

describe('ModifyDeleteFormComponent', () => {
  let component: ModifyDeleteFormComponent;
  let fixture: ComponentFixture<ModifyDeleteFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyDeleteFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyDeleteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
