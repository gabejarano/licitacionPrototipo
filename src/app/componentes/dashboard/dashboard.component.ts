import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  logueadoProveedor=false;
  logueadoTechEdge=false;
  constructor() { }

  ngOnInit() {
    if(localStorage.getItem("access")=='proveedor'){
      this.logueadoProveedor=true;
    }
    else if(localStorage.getItem("access")=='techedge'){
      this.logueadoTechEdge=true;
    }
  }

}
