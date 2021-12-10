import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PedidoRoutingModule } from './pedido-routing.module';
import { ProductoComponent } from './producto/producto.component';
import { EstadoComponent } from './estado/estado.component';
import { CrearComponent } from './crear/crear.component';
import { EditarComponent } from './editar/editar.component';
import { EliminarComponent } from './eliminar/eliminar.component';


@NgModule({
  declarations: [
    ProductoComponent,
    EstadoComponent,
    CrearComponent,
    EditarComponent,
    EliminarComponent
  ],
  imports: [
    CommonModule,
    PedidoRoutingModule
  ]
})
export class PedidoModule { }
