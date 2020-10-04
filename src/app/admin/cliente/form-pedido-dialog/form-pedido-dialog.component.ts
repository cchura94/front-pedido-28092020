import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductoService } from '../../producto/producto.service';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-form-pedido-dialog',
  templateUrl: './form-pedido-dialog.component.html',
  styleUrls: ['./form-pedido-dialog.component.css'],
})
export class FormPedidoDialogComponent implements OnInit {
  cliente: any;
  productos: any;
  carrito = [];
  total = 0;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private productoService: ProductoService,
    private clienteService: ClienteService
  ) {
    this.cliente = data;
  }

  ngOnInit(): void {
    this.productoService.listar().subscribe((res: any) => {
      this.productos = res;
    });
  }

  agregarCarrito(prod) {
    this.total += prod.precio;
    prod.stock--;
    prod.cantidad = 1;
    this.carrito.push(prod);
  }
  incrementar(c) {
    this.total += c.precio;
    c.cantidad++;
  }
  decrementar(c) {
    this.total -= c.precio;
    c.cantidad--;
  }

  realizarPedido() {
    let ped = [];
    for (let i = 0; i < this.carrito.length; i++) {
      const prod_id = this.carrito[i]._id;
      const cantidad = this.carrito[i].cantidad;

      ped.push({ producto: prod_id, cantidad: cantidad });
    }

    let pedido = {
      cliente: this.data._id,
      productos: ped,
      monto_total: this.total,
    };
    console.log(pedido);
    this.clienteService.realizarPedido(pedido).subscribe((res: any) => {
      console.log(res);
    });
  }
}
