import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefboxComponent } from './refbox.component';

describe('RefboxComponent', () => {
  let component: RefboxComponent;
  let fixture: ComponentFixture<RefboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
