import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './plantilla/error/error.component';
import { InicioComponent } from './plantilla/inicio/inicio.component';

const routes: Routes = [
  {
    path:"inicio",
    component:InicioComponent
  },
  {
    path:"",
    pathMatch:'full',
    redirectTo: '/inicio'
  },
  {
    path: 'seguridad',
    loadChildren:()=>import("./modulos/seguridad/seguridad.module").then(x=>x.SeguridadModule)
  },
  {
    path: 'cliente',
    loadChildren:()=>import("./modulos/cliente/cliente.module").then(x=>x.ClienteModule)
  },
  {
    path: 'pedido',
    loadChildren:()=>import("./modulos/pedido/pedido.module").then(x=>x.PedidoModule)
  },
  {
    path: 'veterinaria',
    loadChildren:()=>import("./modulos/veterinaria/veterinaria.module").then(x=>x.VeterinariaModule)
  },
  {
    path: 'usuarios',
    loadChildren:()=>import("./modulos/usuarios/usuarios.module").then(x=>x.UsuariosModule)
  },
  {
    path: 'mascota',
    loadChildren:()=>import("./modulos/mascota/mascota.module").then(x=>x.MascotaModule)
  },
  {
    path: 'solicitudes',
    loadChildren:()=>import("./modulos/solicitudes/solicitudes.module").then(x=>x.SolicitudesModule)
  },
  {
    path: 'cuenta',
    loadChildren:()=>import("./modulos/cuenta/cuenta.module").then(x=>x.CuentaModule)
  },
  {
    path: 'administrador',
    loadChildren:()=>import("./modulos/administrador/administrador.module").then(x=>x.AdministradorModule)
  },
  {
    path: 'planes',
    loadChildren:()=>import("./modulos/planes/planes.module").then(x=>x.PlanesModule)
  },
  {
    path: 'servicios',
    loadChildren:()=>import("./modulos/servicios/servicios.module").then(x=>x.ServiciosModule)
  },
  {
    path: 'informes',
    loadChildren:()=>import("./modulos/informes/informes.module").then(x=>x.InformesModule)
  },
  {
    path: 'asesores',
    loadChildren:()=>import("./modulos/asesores/asesores.module").then(x=>x.AsesoresModule)
  },
  {
    path: 'producto',
    loadChildren:()=>import("./modulos/producto/producto.module").then(x=>x.ProductoModule)
  },
  {
    path: 'afiliaciones',
    loadChildren:()=>import("./modulos/afiliaciones/afiliaciones.module").then(x=>x.AfiliacionesModule)
  },
  {
    path:'**',
    component: ErrorComponent
  }
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
