import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidadorSesionGuard } from 'src/app/guardianes/validador-sesion.guard';
import { CrearProductoComponent } from './crear-producto/crear-producto.component';
import { EditarProductoComponent } from './editar-producto/editar-producto.component';
import { EliminarProductoComponent } from './eliminar-producto/eliminar-producto.component';
import { InformeProductoComponent } from './informe-producto/informe-producto.component';

const routes: Routes = [
  {
    path: 'crearProducto',
    component: CrearProductoComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'editarProducto/:id',
    component: EditarProductoComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'eliminarProducto',
    component: EliminarProductoComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'informeProducto',
    component: InformeProductoComponent,
    canActivate: [ValidadorSesionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
