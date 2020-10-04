import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPedidoDialogComponent } from './form-pedido-dialog.component';

describe('FormPedidoDialogComponent', () => {
  let component: FormPedidoDialogComponent;
  let fixture: ComponentFixture<FormPedidoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPedidoDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPedidoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
