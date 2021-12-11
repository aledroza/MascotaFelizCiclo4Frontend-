import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EliminarAfiliacionComponent } from '../afiliaciones/eliminar-afiliacion/eliminar-afiliacion.component';
import { CrearComponent } from './crear/crear.component';
import { EditarComponent } from './editar/editar.component';
import { EliminarComponent } from './eliminar/eliminar.component';
import { EstadoComponent } from './estado/estado.component';
import { ProductoComponent } from './producto/producto.component';

const routes: Routes = [
{
  path: "crearPedido",
  component: CrearComponent
},
{
  path: "editarPedido",
  component: EditarComponent
},
{
  path: "eliminarPedido",
  component: EliminarComponent
},
{
  path: "estadoPedido",
  component: EstadoComponent
},
{
  path: "producto",
  component: ProductoComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PedidoRoutingModule { }
