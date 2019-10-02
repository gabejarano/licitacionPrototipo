import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {FlashMessagesService} from 'angular2-flash-messages'

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  constructor(private router:Router, private flash: FlashMessagesService ) { }

  enviarPropuesta(){
    this.router.navigate(['licitaciones/dashboard'])
    this.flash.show('Se creo correctamente la licitación', {cssClass: 'alert-success', timeout:6000})
  }
  ngOnInit() {
  }

}
