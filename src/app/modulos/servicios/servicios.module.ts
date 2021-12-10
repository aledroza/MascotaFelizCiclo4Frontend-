import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiciosRoutingModule } from './servicios-routing.module';
import { CrearServicioComponent } from './crear-servicio/crear-servicio.component';


@NgModule({
  declarations: [
    CrearServicioComponent
  ],
  imports: [
    CommonModule,
    ServiciosRoutingModule
  ]
})
export class ServiciosModule { }
