import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  logueadoProveedor=false;
  logueadoTechEdge=false;
  constructor(private router: Router, private flash: FlashMessagesService) { }

  mandarCorreos(){

    this.router.navigate(['/licitaciones/dashboard']);
    this.flash.show('Se envió correctamente el correo a todos los proveedores', {cssClass: 'alert-success', timeout:6000})
  }
  ngOnInit() {
    if(localStorage.getItem("access")=='proveedor'){
      this.logueadoProveedor=true;
    }
    else if(localStorage.getItem("access")=='techedge'){
      this.logueadoTechEdge=true;
    }
  }

}
