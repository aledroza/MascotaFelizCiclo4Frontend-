import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformeAfiliacionesComponent } from './informe-afiliaciones.component';

describe('InformeAfiliacionesComponent', () => {
  let component: InformeAfiliacionesComponent;
  let fixture: ComponentFixture<InformeAfiliacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformeAfiliacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformeAfiliacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
