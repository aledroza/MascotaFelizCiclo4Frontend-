import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VeterinariaRoutingModule } from './veterinaria-routing.module';
import { ConocenosComponent } from './conocenos/conocenos.component';
import { MisionComponent } from './mision/mision.component';
import { VisionComponent } from './vision/vision.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { ProductosComponent } from './productos/productos.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { RegistroComponent } from './registro/registro.component';


@NgModule({
  declarations: [
    ConocenosComponent,
    MisionComponent,
    VisionComponent,
    ContactanosComponent,
    ProductosComponent,
    ServiciosComponent,
    RegistroComponent
  ],
  imports: [
    CommonModule,
    VeterinariaRoutingModule
  ]
})
export class VeterinariaModule { }
