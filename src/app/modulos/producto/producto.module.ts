import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { CrearProductoComponent } from './crear-producto/crear-producto.component';
import { EditarProductoComponent } from './editar-producto/editar-producto.component';
import { EliminarProductoComponent } from './eliminar-producto/eliminar-producto.component';
import { InformeProductoComponent } from './informe-producto/informe-producto.component';


@NgModule({
  declarations: [
    CrearProductoComponent,
    EditarProductoComponent,
    EliminarProductoComponent,
    InformeProductoComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule
  ]
})
export class ProductoModule { }
