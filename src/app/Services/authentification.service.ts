import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environment/environment';
import { User } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  private userSubject: BehaviorSubject<User | null> ;
  public user: Observable<User | null>;

  constructor(
    private router: Router,
    private http: HttpClient
  ) {
    this.userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): User{
    return this.userSubject.value!;
  }

  login(username: string, password: string){
    return this.http.post<any>(`${environment.apiUrl}/users/authenticate`, {username, password}).pipe(map(user => {
      user.authdata = window.btoa(username + ':' + password);
      localStorage.setItem('user', JSON.stringify(user));
      this.userSubject.next(user);
      return user;
    }))
  }

  logout() {
    localStorage.removeItem('user');
    this.userSubject.next(null);
    this.router.navigate(['/login']);
  }
}