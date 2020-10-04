import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { ClienteComponent } from './cliente/cliente.component';
import {
  CreateProductoDialog,
  ProductoComponent,
} from './producto/producto.component';
import { PedidoComponent } from './pedido/pedido.component';
import { AdminRoutingModule } from './admin-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormClienteDialogComponent } from './cliente/form-cliente-dialog/form-cliente-dialog.component';
import { FormPedidoDialogComponent } from './cliente/form-pedido-dialog/form-pedido-dialog.component';
import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
  declarations: [
    AdminComponent,
    ClienteComponent,
    ProductoComponent,
    PedidoComponent,
    NavbarComponent,
    CreateProductoDialog,
    FormClienteDialogComponent,
    FormPedidoDialogComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    // Rutas de admin Habilitados
    ReactiveFormsModule,
    QRCodeModule,
  ],
})
export class AdminModule {}
