import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministradorRoutingModule } from './administrador-routing.module';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { SolicitudesComponent } from './solicitudes/solicitudes.component';
import { InformesComponent } from './informes/informes.component';
import { AfiliacionesComponent } from './afiliaciones/afiliaciones.component';
import { PlanesComponent } from './planes/planes.component';


@NgModule({
  declarations: [
    UsuariosComponent,
    ServiciosComponent,
    SolicitudesComponent,
    InformesComponent,
    AfiliacionesComponent,
    PlanesComponent
  ],
  imports: [
    CommonModule,
    AdministradorRoutingModule
  ]
})
export class AdministradorModule { }
