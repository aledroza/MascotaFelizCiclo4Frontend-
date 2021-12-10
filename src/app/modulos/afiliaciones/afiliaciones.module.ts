import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AfiliacionesRoutingModule } from './afiliaciones-routing.module';
import { CrearAfiliacionComponent } from './crear-afiliacion/crear-afiliacion.component';
import { EditarAfiliacionComponent } from './editar-afiliacion/editar-afiliacion.component';
import { EliminarAfiliacionComponent } from './eliminar-afiliacion/eliminar-afiliacion.component';
import { ConsultarAfiliacionComponent } from './consultar-afiliacion/consultar-afiliacion.component';


@NgModule({
  declarations: [
    CrearAfiliacionComponent,
    EditarAfiliacionComponent,
    EliminarAfiliacionComponent,
    ConsultarAfiliacionComponent
  ],
  imports: [
    CommonModule,
    AfiliacionesRoutingModule
  ]
})
export class AfiliacionesModule { }
