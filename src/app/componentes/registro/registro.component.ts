import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  email:string;
  password:string;
  estaRegistrado:boolean;

  constructor(private authService:AuthService, private router:Router) {
    this.email='';
    this.password='';
    this.estaRegistrado=false;
  }

  ngOnInit(): void {
  }

  async registrarUsuario(){
    const usuario = await this.authService.registrarUsuario(this.email,this.password);

    if(usuario){
      this.router.navigate(['/home']);
    }else{
      this.estaRegistrado=true;
      console.log('error');
    }
  }

}
