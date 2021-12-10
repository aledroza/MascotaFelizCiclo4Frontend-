import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolicitudesRoutingModule } from './solicitudes-routing.module';
import { CrearSolicitudComponent } from './crear-solicitud/crear-solicitud.component';
import { ConsultarSolicitudComponent } from './consultar-solicitud/consultar-solicitud.component';
import { EliminarSolicitudComponent } from './eliminar-solicitud/eliminar-solicitud.component';
import { InformeSolicitudesComponent } from './informe-solicitudes/informe-solicitudes.component';


@NgModule({
  declarations: [
    CrearSolicitudComponent,
    ConsultarSolicitudComponent,
    EliminarSolicitudComponent,
    InformeSolicitudesComponent
  ],
  imports: [
    CommonModule,
    SolicitudesRoutingModule
  ]
})
export class SolicitudesModule { }
