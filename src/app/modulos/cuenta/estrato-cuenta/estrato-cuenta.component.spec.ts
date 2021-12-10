import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstratoCuentaComponent } from './estrato-cuenta.component';

describe('EstratoCuentaComponent', () => {
  let component: EstratoCuentaComponent;
  let fixture: ComponentFixture<EstratoCuentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstratoCuentaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstratoCuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
