import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsesoresRoutingModule } from './asesores-routing.module';
import { PlanesComponent } from './planes/planes.component';
import { ProductoComponent } from './producto/producto.component';
import { ClienteComponent } from './cliente/cliente.component';
import { SolicitudesComponent } from './solicitudes/solicitudes.component';
import { InformeComponent } from './informe/informe.component';


@NgModule({
  declarations: [
    PlanesComponent,
    ProductoComponent,
    ClienteComponent,
    SolicitudesComponent,
    InformeComponent
  ],
  imports: [
    CommonModule,
    AsesoresRoutingModule
  ]
})
export class AsesoresModule { }
