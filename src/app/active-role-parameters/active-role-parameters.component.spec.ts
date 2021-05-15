import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveRoleParametersComponent } from './active-role-parameters.component';

describe('ActiveRoleParametersComponent', () => {
  let component: ActiveRoleParametersComponent;
  let fixture: ComponentFixture<ActiveRoleParametersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveRoleParametersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveRoleParametersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
