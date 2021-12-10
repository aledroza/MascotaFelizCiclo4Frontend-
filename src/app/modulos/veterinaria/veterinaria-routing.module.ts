import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiciosComponent } from '../administrador/servicios/servicios.component';
import { ConocenosComponent } from './conocenos/conocenos.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { MisionComponent } from './mision/mision.component';
import { ProductosComponent } from './productos/productos.component';
import { VisionComponent } from './vision/vision.component';

const routes: Routes = [
  /************************** Veterinaria-conocenos **************************/
  {
    path: 'conocenos',
    component: ConocenosComponent
  },
  /************************** Veterinaria-Mision ****************************/
  {
    path: 'mision',
    component: MisionComponent
  },
  {
    path: 'vision',
    component: VisionComponent
  },
  {
    path: 'contactanos',
    component: ContactanosComponent
  },
  {
    path: 'productos',
    component: ProductosComponent
  },
  {
    path: 'servicios',
    component: ServiciosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VeterinariaRoutingModule { }
