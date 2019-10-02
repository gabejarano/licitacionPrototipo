import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import {Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class NoGuardGuard implements CanActivate {
  constructor(private router:Router){}
  canActivate() {
    if(localStorage.getItem("access")==null){
      return true
    }else{
      this.router.navigate(['licitaciones/dashboard'])
      return false
      
    }
  }
  
}
