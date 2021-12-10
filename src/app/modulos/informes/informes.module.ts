import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformesRoutingModule } from './informes-routing.module';
import { InformeSolicitudesComponent } from './informe-solicitudes/informe-solicitudes.component';
import { InformePlanesComponent } from './informe-planes/informe-planes.component';
import { InformeProductosComponent } from './informe-productos/informe-productos.component';
import { InformeAfiliacionesComponent } from './informe-afiliaciones/informe-afiliaciones.component';


@NgModule({
  declarations: [
    InformeSolicitudesComponent,
    InformePlanesComponent,
    InformeProductosComponent,
    InformeAfiliacionesComponent
  ],
  imports: [
    CommonModule,
    InformesRoutingModule
  ]
})
export class InformesModule { }
