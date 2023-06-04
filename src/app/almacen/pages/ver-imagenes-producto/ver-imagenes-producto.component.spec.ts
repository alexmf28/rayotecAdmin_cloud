import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerImagenesProductoComponent } from './ver-imagenes-producto.component';

describe('VerImagenesProductoComponent', () => {
  let component: VerImagenesProductoComponent;
  let fixture: ComponentFixture<VerImagenesProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerImagenesProductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerImagenesProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
