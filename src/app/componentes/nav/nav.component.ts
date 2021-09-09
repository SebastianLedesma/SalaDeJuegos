import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  userObservable: Observable<any> = this.authService.afAuth.user;

  constructor(private authService:AuthService,private router:Router) { }

  async cerrarSesion(){
    await this.authService.logOut();
    this.router.navigate(['/']);
  }

}
