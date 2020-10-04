import { Component, Inject, OnInit } from '@angular/core';
import { Producto } from './producto';
import { ProductoService } from './producto.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

//const PRODUCTO_DATA: Producto[] = [];

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css'],
})
export class ProductoComponent implements OnInit {
  productos: Producto[] = [];

  displayedColumns: string[] = [
    'nombre',
    'precio',
    'stock',
    'descripcion',
    'acciones',
  ];
  //dataSource = PRODUCTO_DATA;

  public myAngularxQrCode: string = null;
  constructor(
    private productoService: ProductoService,
    public dialog: MatDialog,
    private router: Router
  ) {
    this.myAngularxQrCode = 'Hola';
  }

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

  nuevoProducto(datos = null) {
    if (datos == null) {
      this.dialog.open(CreateProductoDialog, {
        width: '450px',
      });
    } else {
      this.dialog.open(CreateProductoDialog, {
        width: '450px',
        data: datos,
      });
    }
  }

  eliminarProducto(id) {
    console.log(this.productos);
    if (confirm('¿Esta Seguro de eliminar el producto?')) {
      this.productoService.eliminar(id).subscribe(
        (res) => {
          console.log(res);
          //this.productos.splice(4, 1);
        },
        (error) => {
          console.log(error);
        }
      );
    }
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
  id: string;
  estado: boolean = false;

  constructor(
    private productoService: ProductoService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private toastr: ToastrService
  ) {
    if (data != null) {
      this.productoForm = new FormGroup({
        nombre: new FormControl(data.nombre, [Validators.required]),
        precio: new FormControl(data.precio, [Validators.required]),
        stock: new FormControl(data.stock),
        descripcion: new FormControl(data.descripcion),
      });
      this.id = data._id;
      this.estado = true;
    }
  }
  guardarProducto() {
    this.productoService.guardar(this.productoForm.value).subscribe(
      (res) => {
        this.toastr.success('Producto Registrado', 'Registrado');
        console.log(res);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  modificarProducto() {
    this.productoService.modificar(this.id, this.productoForm.value).subscribe(
      (res) => {
        console.log(res);
        this.toastr.success('Cliente Modificado', 'Modificado');
      },
      (error) => {
        console.log(error);
        this.toastr.error('Error al Modificar el cliente');
      }
    );
  }
}
