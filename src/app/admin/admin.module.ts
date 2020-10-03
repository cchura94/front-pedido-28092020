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

@NgModule({
  declarations: [
    AdminComponent,
    ClienteComponent,
    ProductoComponent,
    PedidoComponent,
    NavbarComponent,
    CreateProductoDialog,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    // Rutas de admin Habilitados
    ReactiveFormsModule,
  ],
})
export class AdminModule {}
