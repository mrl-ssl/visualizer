import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotateParametersComponent } from './rotate-parameters.component';

describe('RotateParametersComponent', () => {
  let component: RotateParametersComponent;
  let fixture: ComponentFixture<RotateParametersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RotateParametersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RotateParametersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
