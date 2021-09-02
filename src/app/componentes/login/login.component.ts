import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  usuario:string;
  password:string;

  constructor() {
    this.usuario='';
    this.password='';
  }

  validarUsuario():void{
    if(this.usuario == 'ricardoledesma' && this.password == '12345'){
      window.location.href='bienvenido';

    }
  }

  autocompletar(){
    this.usuario= "ricardoledesma";
    this.password='12345';
  }

}
