import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabulatorTablesComponent } from './tabulator-tables.component';

describe('TabulatorTablesComponent', () => {
  let component: TabulatorTablesComponent;
  let fixture: ComponentFixture<TabulatorTablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabulatorTablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabulatorTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
