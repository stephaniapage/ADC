import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  private authError;
  username: FormControl;
  password: FormControl;
  loginForm:FormGroup;

  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.auth();
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }
  
  public auth() {
    //le formulaire va appeler la méthode auth et passer ses valeurs dans les paramètres
    this.authService.auth(this.loginForm.get('username').value, this.loginForm.get('password').value).subscribe(
      //si l'authentification est validee, on ajoute le jwt dans le local storage
      (result: any) => {localStorage.setItem('jwt', result.token)
      this.router.navigate(['alexandra'])},
      (error: any) => {console.error("error")
      if (error.status == 401){
        this.authError = {
          code: error.status,
          message: 'Identifiant ou mot de passe invalides.'
        }
      } 
    }
    );
  }
}
