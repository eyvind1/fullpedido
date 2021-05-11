import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficiosVendedorComponent } from './beneficios-vendedor.component';

describe('BeneficiosVendedorComponent', () => {
  let component: BeneficiosVendedorComponent;
  let fixture: ComponentFixture<BeneficiosVendedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeneficiosVendedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeneficiosVendedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
