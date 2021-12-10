import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MascotaRoutingModule } from './mascota-routing.module';
import { AfiliacionesComponent } from './afiliaciones/afiliaciones.component';
import { HistoriaClinicaComponent } from './historia-clinica/historia-clinica.component';
import { InformacionComponent } from './informacion/informacion.component';
import { PlanesComponent } from './planes/planes.component';
import { InformesComponent } from './informes/informes.component';


@NgModule({
  declarations: [
    AfiliacionesComponent,
    HistoriaClinicaComponent,
    InformacionComponent,
    PlanesComponent,
    InformesComponent
  ],
  imports: [
    CommonModule,
    MascotaRoutingModule
  ]
})
export class MascotaModule { }
