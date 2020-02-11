import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        //un interceptor sert à intercepter une requête HTTP
        //pour pouvoir en modifier les paramètres
        //ici on vérifie si notre token jwt est présent dans le local storage
        const jwt = localStorage.getItem("jwt");
            if(jwt) {
                //si c'est le cas, on copie la requête sortante (impossible de la modifier directement)
                //et on y ajoute le Authorization Header contenant notre token
                const cloned = req.clone( { headers: req.headers.set("Authorization", `Bearer ${jwt}`) } );
                //une fois le header demandé ajouté, on laisse passer notre nouvelle requête
                return next.handle(cloned);
            }
            //si on n'a pas le token, on la fait juste passer sans modification
            return next.handle(req);
    }
}
