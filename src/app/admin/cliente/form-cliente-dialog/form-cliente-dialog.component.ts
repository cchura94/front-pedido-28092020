import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-form-cliente-dialog',
  templateUrl: './form-cliente-dialog.component.html',
  styleUrls: ['./form-cliente-dialog.component.css'],
})
export class FormClienteDialogComponent implements OnInit {
  clienteForm = new FormGroup({
    nombres: new FormControl('', [Validators.required]),
    apellidos: new FormControl('', [Validators.required]),
    email: new FormControl('0'),
    telefono: new FormControl(''),
  });
  id: string;
  estado: boolean = false;
  constructor(
    private clienteService: ClienteService,
    private toastr: ToastrService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (data != null) {
      this.clienteForm = new FormGroup({
        nombres: new FormControl(data.nombres, [Validators.required]),
        apellidos: new FormControl(data.apellidos, [Validators.required]),
        email: new FormControl(data.email),
        telefono: new FormControl(data.telefono),
      });
      this.id = data._id;
      this.estado = true;
    }
  }

  ngOnInit(): void {}

  guardarCliente() {
    this.clienteService.guardar(this.clienteForm.value).subscribe(
      (res) => {
        console.log(res);
        this.toastr.success('Cliente Registrado');
      },
      (error) => {
        console.log(error);
      }
    );
  }

  modificarCliente() {
    this.clienteService.modificar(this.id, this.clienteForm.value).subscribe(
      (res) => {
        console.log(res);
        this.toastr.success('Cliente Modificado');
      },
      (error) => {
        console.log(error);
        this.toastr.success('Error al Modificar el Cliente');
      }
    );
  }
}
