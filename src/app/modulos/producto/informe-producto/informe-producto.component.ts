import { Component, OnInit } from '@angular/core';
import { ModeloProducto } from 'src/app/modelos/producto.modelo';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-informe-producto',
  templateUrl: './informe-producto.component.html',
  styleUrls: ['./informe-producto.component.css']
})
export class InformeProductoComponent implements OnInit {
  listadoRegistros: ModeloProducto[] = [];

  constructor(private productoServicio: ProductoService) { }

  ngOnInit(): void {
    this.ObtenerListadoProductos();
  }

  ObtenerListadoProductos(){
    this.productoServicio.ObtenerRegistro().subscribe((datos: ModeloProducto[]) => {
      this.listadoRegistros = datos;
    })
  }

}
