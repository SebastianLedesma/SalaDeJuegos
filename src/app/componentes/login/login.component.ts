import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email:string;
  password:string;

  constructor(private authService:AuthService, private router:Router) {
    this.email='';
    this.password='';
  }

  async validarUsuario(){
    const usuario = await this.authService.logIn(this.email,this.password);

    if(usuario){
      this.router.navigate(['/home']);
    }
  }

  autocompletar(){
    this.email= "ricardoledesma@mail.com";
    this.password='123456';
  }

}
