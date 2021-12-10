import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformeSolicitudesComponent } from './informe-solicitudes.component';

describe('InformeSolicitudesComponent', () => {
  let component: InformeSolicitudesComponent;
  let fixture: ComponentFixture<InformeSolicitudesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformeSolicitudesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformeSolicitudesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
