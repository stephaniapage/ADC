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
  private username: FormControl;
  private password: FormControl;
  private loginForm:FormGroup;

  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }
  
  public auth() {

    //l'envoi du formulaire appele la méthode auth() et passe les valeurs des champs saisis dans les paramètres
    
    this.authService.auth(this.loginForm.get('username').value, this.loginForm.get('password').value).subscribe(
      
      //si l'authentification est validée, on ajoute le token dans le local storage par la méthode setItem()
      // clé: 'jwt', valeur: le token lui-même

        (result: any) => {localStorage.setItem('jwt', result.token); 

      // si l'utilisateur parvient à se connecter, on le redirige vers la page Admin (composant 'alexandra')

          this.router.navigate(['alexandra'])},

      //En car de problème, si le code d'erreur est 401 (Unauthorized), on affiche un message générique pour
      //indiquer que l'une des données saisies est incorrecte

          (error: any) => {console.error("error")
              if (error.status == 401){
                  this.authError = {
                      code: error.status,
                      message: 'Identifiant ou mot de passe invalides.'
                  }
              } 
          });
    }
}
