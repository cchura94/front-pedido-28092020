import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormClienteDialogComponent } from './form-cliente-dialog.component';

describe('FormClienteDialogComponent', () => {
  let component: FormClienteDialogComponent;
  let fixture: ComponentFixture<FormClienteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormClienteDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormClienteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
