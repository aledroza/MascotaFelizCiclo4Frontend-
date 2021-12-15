import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearProductoComponent } from './crear-producto/crear-producto.component';
import { EditarProductoComponent } from './editar-producto/editar-producto.component';
import { EliminarProductoComponent } from './eliminar-producto/eliminar-producto.component';
import { InformeProductoComponent } from './informe-producto/informe-producto.component';

const routes: Routes = [
  {
    path: 'crearProducto',
    component: CrearProductoComponent
  },
  {
    path: 'editarProducto/:id',
    component: EditarProductoComponent
  },
  {
    path: 'eliminarProducto',
    component: EliminarProductoComponent
  },
  {
    path: 'informeProducto',
    component: InformeProductoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
