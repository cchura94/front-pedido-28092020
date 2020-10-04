import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ClienteService } from './cliente.service';
import { FormClienteDialogComponent } from './form-cliente-dialog/form-cliente-dialog.component';
import { FormPedidoDialogComponent } from './form-pedido-dialog/form-pedido-dialog.component';

import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css'],
})
export class ClienteComponent implements OnInit {
  clientes = [];
  constructor(
    public dialog: MatDialog,
    private clienteService: ClienteService
  ) {}

  ngOnInit(): void {
    this.clienteService.listar().subscribe((res: any) => {
      this.clientes = res;
    });
  }

  mostrarDialogCliente(datos = null) {
    if (datos == null) {
      this.dialog.open(FormClienteDialogComponent, {
        width: '450px',
      });
    } else {
      this.dialog.open(FormClienteDialogComponent, {
        width: '450px',
        data: datos,
      });
    }
  }

  eliminarCliente(i, id) {
    if (confirm('Esta seguro de eliminar al cliente?')) {
      this.clienteService.eliminar(id).subscribe((res) => {
        this.clientes.splice(i, 1);
      });
    }
  }
  dialogNuevoPedido(clie) {
    this.dialog.open(FormPedidoDialogComponent, {
      width: '850px',
      data: clie,
    });
  }

  generarPDF() {
    const doc = new jsPDF();

    doc.text('LISTA DE CLIENTES!', 10, 10);
    doc.save('a4.pdf');
  }
}
