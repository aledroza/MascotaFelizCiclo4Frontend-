import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from '../veterinaria/registro/registro.component';
import { EditarComponent } from './editar/editar.component';

const routes: Routes = [
  {
    path:'registro',
    component: RegistroComponent
  },
  {
    path:'editar-registro',
    component: EditarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
