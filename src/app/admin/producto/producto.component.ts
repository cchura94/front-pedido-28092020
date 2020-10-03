import { Component, OnInit } from '@angular/core';
import { Producto } from './producto';
import { ProductoService } from './producto.service';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

//const PRODUCTO_DATA: Producto[] = [];

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css'],
})
export class ProductoComponent implements OnInit {
  productos: Producto[] = [];

  displayedColumns: string[] = ['nombre', 'precio', 'stock', 'descripcion'];
  //dataSource = PRODUCTO_DATA;

  constructor(
    private productoService: ProductoService,
    public dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productoService.listar().subscribe(
      (datos: any) => {
        console.log(datos);
        this.productos = datos;
      },
      (error) => {
        console.log(error);
        localStorage.clear();
        this.router.navigate(['ingresar']);
      }
    );
  }

  nuevoProducto() {
    const dialogRef = this.dialog.open(CreateProductoDialog, {
      width: '450px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('**************', result);
      //if (result.nombre) {
      //this.productos.push(result);

      //}
    });
  }
}

@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'create-producto-dialog.html',
})
export class CreateProductoDialog {
  productoForm = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    precio: new FormControl('', [Validators.required]),
    stock: new FormControl('0'),
    descripcion: new FormControl(''),
  });

  constructor(private productoService: ProductoService) {}
  guardarProducto() {
    this.productoService.guardar(this.productoForm.value).subscribe(
      (res) => {
        console.log('FUNCIONOOOO');
        console.log(res);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
