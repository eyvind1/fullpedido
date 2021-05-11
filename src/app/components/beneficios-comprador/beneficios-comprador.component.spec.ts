import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficiosCompradorComponent } from './beneficios-comprador.component';

describe('BeneficiosCompradorComponent', () => {
  let component: BeneficiosCompradorComponent;
  let fixture: ComponentFixture<BeneficiosCompradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeneficiosCompradorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeneficiosCompradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
