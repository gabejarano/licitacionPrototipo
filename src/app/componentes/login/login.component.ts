import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  user = {
    userName : '',
    password : ''
  }
  constructor(private router: Router,  private flashMessagesService: FlashMessagesService) { }

  iniciarSesion(){
      localStorage.setItem("access", this.user.userName );
      if(this.user.userName=='proveedor' || this.user.userName == 'techedge'){
        this.router.navigate(["/licitaciones/dashboard"]);
        this.flashMessagesService.show('Inició Sesión exitosamente', { cssClass: 'alert-success', timeout: 6000 });
        location.reload()
      }else{
        this.flashMessagesService.show('No inició sesión exitosamente', { cssClass: 'alert-danger', timeout: 6000, position: 'bottom right' });
      }
  }

  
  ngOnInit() {
    
  }

}
