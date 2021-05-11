import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoCommprasComponent } from './listado-commpras.component';

describe('ListadoCommprasComponent', () => {
  let component: ListadoCommprasComponent;
  let fixture: ComponentFixture<ListadoCommprasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoCommprasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoCommprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
