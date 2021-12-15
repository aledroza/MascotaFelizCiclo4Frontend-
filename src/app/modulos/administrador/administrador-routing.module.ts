import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfiliacionesComponent } from './afiliaciones/afiliaciones.component';
import { InformesComponent } from './informes/informes.component';
import { PlanesComponent } from './planes/planes.component';
import { ProductoComponent } from './producto/producto.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { SolicitudesComponent } from './solicitudes/solicitudes.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
  {
    path: 'usuarios',
    component: UsuariosComponent
  },
  {
    path: 'servicios',
    component: ServiciosComponent
  },
  {
    path: 'solicitudes',
    component: SolicitudesComponent
  },
  {
    path: 'informes',
    component: InformesComponent
  },
  {
    path: 'afiliaciones',
    component: AfiliacionesComponent
  },
  {
    path: 'planes',
    component: PlanesComponent
  },
  {
    path: 'producto',
    component: ProductoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministradorRoutingModule { }
