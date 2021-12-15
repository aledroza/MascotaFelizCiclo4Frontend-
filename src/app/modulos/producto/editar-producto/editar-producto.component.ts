import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { ModeloProducto } from 'src/app/modelos/producto.modelo';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent implements OnInit {
  id: string = '';
  //pedidoId: string = '';
  //administradorId: string = '';
  //asesorId: string = '';


  fgValidador: FormGroup = this.fb.group({
    'id': ['',[Validators.required]],
    //'pedidoId': ['',[Validators.required]],
    //'administradorId': ['',[Validators.required]],
    //'asesorId': ['',[Validators.required]],
    'nombre': ['',[Validators.required]],
    'descripcion': ['',[Validators.required]],
    'tipo': ['',[Validators.required]],
    'proveedor': ['',[Validators.required]],
    'departamento': ['',[Validators.required]],
    'ciudad': ['',[Validators.required]],
    'precio': ['',[Validators.required]],
  });

  constructor(private fb: FormBuilder, private servicioProducto: ProductoService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    //this.pedidoId = this.route.snapshot.params["pedidoId"];
    //this.administradorId = this.route.snapshot.params["administradorId"];
    //this.asesorId = this.route.snapshot.params["asesorId"];
    this.BuscarProducto();
  }

  BuscarProducto(){
    this.servicioProducto.ObtenerRegistroId(this.id).subscribe((datos: ModeloProducto) => {
      this.fgValidador.controls["id"].setValue(this.id);
      //this.fgValidador.controls["pedidoId"].setValue(this.pedidoId);
      //this.fgValidador.controls["administradorId"].setValue(this.administradorId);
      //this.fgValidador.controls["asesorId"].setValue(this.asesorId);
      this.fgValidador.controls["nombre"].setValue(datos.nombre);
      this.fgValidador.controls["descripcion"].setValue(datos.descripcion);
      this.fgValidador.controls["tipo"].setValue(datos.tipo);
      this.fgValidador.controls["proveedor"].setValue(datos.proveedor);
      this.fgValidador.controls["departamento"].setValue(datos.departamento);
      this.fgValidador.controls["ciudad"].setValue(datos.ciudad);
      this.fgValidador.controls["precio"].setValue(datos.precio);
    });
  }

  EditarProducto(){
    let nombre = this.fgValidador.controls["nombre"].value;
    let descripcion = this.fgValidador.controls["descripcion"].value;
    let tipo = this.fgValidador.controls["tipo"].value;
    let proveedor = this.fgValidador.controls["proveedor"].value;
    let departamento = this.fgValidador.controls["departamento"].value;
    let ciudad = this.fgValidador.controls["ciudad"].value;
    let precio = this.fgValidador.controls["precio"].value;

    let p = new ModeloProducto();
    p.nombre = nombre;
    p.descripcion = descripcion;
    p.tipo = tipo;
    p.proveedor = proveedor;
    p.departamento = departamento;
    p.ciudad = ciudad;
    p.precio = precio;
    p.id = this.id;
    //p.pedidoId = this.pedidoId;
    //p.administradorId = this.administradorId;
    //p.asesorId = this.asesorId;

    this.servicioProducto.ActualizarProducto(p).subscribe((datos: ModeloProducto) => {
      alert("Producto Actualizado Correctamente");
      this.router.navigate(["/producto/informeProducto"]);
    },(error: any) =>{
      alert("Error Actualizando El Producto");
    })
  }


}
