import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'prototipo';
  public isLogged= false;
  chequearLogin(){
    if(localStorage.getItem("access")){
      this.isLogged=true;
    }else{
      this.isLogged=false;
    }
  }
  ngOnInit() {
    this.chequearLogin();
  }
}
