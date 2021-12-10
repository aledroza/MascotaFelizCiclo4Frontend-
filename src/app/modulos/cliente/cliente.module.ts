import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import { PedidosComponent } from './pedidos/pedidos.component';
import { MascotaComponent } from './mascota/mascota.component';
import { SolicitudesComponent } from './solicitudes/solicitudes.component';
import { CuentaComponent } from './cuenta/cuenta.component';


@NgModule({
  declarations: [
    PedidosComponent,
    MascotaComponent,
    SolicitudesComponent,
    CuentaComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule
  ]
})
export class ClienteModule { }
