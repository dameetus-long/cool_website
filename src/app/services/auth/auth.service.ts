import { Injectable, NgZone} from '@angular/core';
import { signInAnonymously } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { User } from '../../services/user/user';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData : User | undefined;

  constructor(
    public afAuth: AngularFireAuth,
    public ngZone: NgZone,
    public router: Router
  ) {}
  signIn(email: string, password: string){
    return this.afAuth
    .signInWithEmailAndPassword(email, password)
    .then((results) => {
      this.afAuth.authState.subscribe((user) => {
        if (user){
          this.router.navigate(['home']);
        }
      });
    })
    .catch((error) => {
      window.alert(error.message);
    })
  }
}
