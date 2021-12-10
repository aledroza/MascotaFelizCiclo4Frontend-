import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearComponent } from '../pedido/crear/crear.component';
import { EditarComponent } from '../pedido/editar/editar.component';
import { EliminarComponent } from '../pedido/eliminar/eliminar.component';
import { EstadoComponent } from '../pedido/estado/estado.component';
import { ProductoComponent } from '../pedido/producto/producto.component';

const routes: Routes = [
  {
    path:'crear-pedido',
    component: CrearComponent
  },
  {
    path:'editar-pedido',
    component: EditarComponent
  },
  {
    path: 'eliminar-pedido',
    component: EliminarComponent
  },
  {
    path: 'consultar-producto',
    component: ProductoComponent
  },
  {
    path: 'estado-pedido',
    component: EstadoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
