import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/users';
import { environment } from '../../environment/environment';
import { AuthentificationService } from '../Services/authentification.service';

@Injectable()
export class BasicAuthInterceptor implements HttpInterceptor {
    constructor(private authentificationService: AuthentificationService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add header with basic auth credentials if user is logged in and request is to the api url
        const user: User = this.authentificationService.userValue;
        const isLoggedIn = user?.authdata;
        const isApiUrl = request.url.startsWith(environment.apiUrl);
        if (isLoggedIn && isApiUrl) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Basic ${user.authdata}`
                }
            });
        }

        return next.handle(request);
    }
}
