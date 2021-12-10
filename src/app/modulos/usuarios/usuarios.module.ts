import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { RegistroComponent } from './registro/registro.component';
import { EditarComponent } from './editar/editar.component';


@NgModule({
  declarations: [
    RegistroComponent,
    EditarComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule
  ]
})
export class UsuariosModule { }
