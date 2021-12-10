import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformePlanesComponent } from './informe-planes.component';

describe('InformePlanesComponent', () => {
  let component: InformePlanesComponent;
  let fixture: ComponentFixture<InformePlanesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformePlanesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformePlanesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
