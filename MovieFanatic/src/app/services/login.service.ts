import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  userList: User[] = [];

  constructor() {
    this.userList.push(new User('admin', 'admin@movie.com', 'password', 'password'));
  }

  public validateUser(username: string, password: string): User {
    for (const u of this.userList) {
      if (u.user_name.toLowerCase() === username) {
        if (u.password.toLowerCase() === password) {
          this.persistLogin(u);
          return u;
        }
      }
    }
    return null;
  }

  private persistLogin(user: User) {
    localStorage.setItem('email', user.email);
    localStorage.setItem('loggedIn', 'true');
  }

  public getUserName(): string {
    return localStorage.getItem('email');
  }

  public isLoggedIn(): boolean {
    const loggedIn = localStorage.getItem('loggedIn');
    return (loggedIn === 'true');
  }

  public logout() {
    localStorage.removeItem('email');
    localStorage.removeItem('loggedIn');
  }
}
