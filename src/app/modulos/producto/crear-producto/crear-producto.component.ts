import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloProducto } from 'src/app/modelos/producto.modelo';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {
  fgValidador: FormGroup = this.fb.group({
    'nombre': ['',[Validators.required]],
    'descripcion': ['',[Validators.required]],
    'tipo': ['',[Validators.required]],
    'proveedor': ['',[Validators.required]],
    'departamento': ['',[Validators.required]],
    'ciudad': ['',[Validators.required]],
    'precio': ['',[Validators.required]],
  });

  constructor(private fb: FormBuilder, private servicioProducto: ProductoService, private router: Router) { }

  ngOnInit(): void {
  }

  GuardarProducto(){
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

    this.servicioProducto.CrearProducto(p).subscribe((datos: ModeloProducto) => {
      alert("Producto Almacenado Correctamente");
      this.router.navigate(["/producto/crearProducto"]);
    },(error: any) =>{
      alert("Error Almacenado El Producto");
    })
  }

}
