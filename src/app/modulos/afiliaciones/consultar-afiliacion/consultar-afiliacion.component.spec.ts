import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarAfiliacionComponent } from './consultar-afiliacion.component';

describe('ConsultarAfiliacionComponent', () => {
  let component: ConsultarAfiliacionComponent;
  let fixture: ComponentFixture<ConsultarAfiliacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarAfiliacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarAfiliacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
