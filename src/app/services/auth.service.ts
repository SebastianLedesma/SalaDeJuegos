import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afAuth: AngularFireAuth) { }

  logIn(email: string, pasword: string) {
    return this.afAuth.signInWithEmailAndPassword(email, pasword);
  }

  async registrarUsuario(email: string, password: string) {

    return this.afAuth.createUserWithEmailAndPassword(email, password).then(resp => {
      return resp.user;
    }).catch(error => {
      return null;
    });
  }

  logOut() {
    this.afAuth.signOut();
  }

}
