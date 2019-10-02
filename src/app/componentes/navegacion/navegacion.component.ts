import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent implements OnInit {

  constructor() { }

  logueadoComoProveedor=false;
  logueadoComoTechEdge=false;
  ngOnInit() {
    if(localStorage.getItem("access")=="proveedor"){
      this.logueadoComoProveedor=true;
    }
    else if(localStorage.getItem("access")=="techedge"){
      this.logueadoComoTechEdge=true;
    }
  }

  logOut(){
    localStorage.removeItem("access");
    location.reload();
  }
}
