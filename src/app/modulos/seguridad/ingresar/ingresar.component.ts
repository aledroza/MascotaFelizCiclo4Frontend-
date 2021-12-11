import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
//const cryptoJS = require("cryptojs");
import * as CryptoJS from 'crypto-js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html',
  styleUrls: ['./ingresar.component.css']
})
export class IngresarComponent implements OnInit {
  fgValidador: FormGroup = this.fb.group({
    'usuario': ['',[Validators.required, Validators.email]],
    'clave'  : ['',[Validators.required]],
    'rol'    : ['',[Validators.required]]
  });

  constructor(private fb: FormBuilder, private servicioSeguridad: SeguridadService, private router: Router ) { }

  ngOnInit(): void {
  }

  IdentificarUsuario(){
    let usuario = this.fgValidador.controls["usuario"].value;
    let rol = this.fgValidador.controls["rol"].value;
    let clave = this.fgValidador.controls["clave"].value;
    
    let claveCifrada = CryptoJS.MD5(clave).toString();
    this.servicioSeguridad.Identificar(usuario,rol,claveCifrada).subscribe((datos:any)=>{
      //OK
      this.servicioSeguridad.AlmacenarSesion(datos);
      this.router.navigate(["/inicio"]);
      alert("Datos Correctos")
    },(error: any) => {
      //KO
      alert("Datos Inválidos")
    })
  }


}
