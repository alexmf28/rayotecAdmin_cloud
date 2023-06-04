import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarReparacionesComponent } from './gestionar-reparaciones.component';

describe('GestionarReparacionesComponent', () => {
  let component: GestionarReparacionesComponent;
  let fixture: ComponentFixture<GestionarReparacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionarReparacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionarReparacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
