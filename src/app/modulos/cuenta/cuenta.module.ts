import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CuentaRoutingModule } from './cuenta-routing.module';
import { EstadoCuentaComponent } from './estado-cuenta/estado-cuenta.component';
import { EstratoCuentaComponent } from './estrato-cuenta/estrato-cuenta.component';


@NgModule({
  declarations: [
    EstadoCuentaComponent,
    EstratoCuentaComponent
  ],
  imports: [
    CommonModule,
    CuentaRoutingModule
  ]
})
export class CuentaModule { }
