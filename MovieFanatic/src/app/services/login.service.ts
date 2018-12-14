<<<<<<< HEAD
import { Injectable, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ConfigAPI } from '../models/configAPI';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  usr: User;
  constructor(private http: HttpClient) { }

  public validateUser(username, password) {
    this.usr = new User(0, '', '', '', '');
    this.usr.username = username;
    this.usr.password = password;
    console.log(this.usr);
    console.log(ConfigAPI.spring_url + 'user/login/');

    return this.http.post<User>(ConfigAPI.spring_url + 'user/login/', this.usr);
  }

  public persistLogin(user: User) {
    localStorage.setItem('id', user.id.toString());
    localStorage.setItem('username', user.username);
    localStorage.setItem('loggedIn', 'true');
  }

  public getUserName(): string {
    return localStorage.getItem('user_name');
  }

  public getUserID(): number {
    return Number(localStorage.getItem('id'));
  }

  public isLoggedIn(): boolean {
    const loggedIn = localStorage.getItem('loggedIn');
    return (loggedIn === 'true');
  }

  public logout() {
    localStorage.removeItem('id');
    localStorage.removeItem('user_name');
    localStorage.removeItem('loggedIn');
  }
}
=======
import { Injectable, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ConfigAPI } from '../models/configAPI';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private LOGGEDIN = 'loggedIn';
  private USERNAME = 'username';
  private ID = 'id';
  private TOKEN = 'token';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  usr: User;

  constructor(private http: HttpClient) {
    localStorage.setItem(this.LOGGEDIN, 'false');
  }

  public validateUser(username, password) {
    this.usr = new User(0, '', '', '', '');
    this.usr.username = username;
    this.usr.password = password;
    return this.http.post<User>(ConfigAPI.spring_url + 'user/login/', this.usr);
  }

  public persistLogin(user: User) {
    localStorage.setItem(this.ID, user.id.toString());
    localStorage.setItem(this.USERNAME, user.username);
    localStorage.setItem(this.TOKEN, user.token);
    localStorage.setItem(this.LOGGEDIN, 'true');
  }

  public getUserName(): string {
    return localStorage.getItem(this.USERNAME);
  }

  public getUserID(): number {
    return Number(localStorage.getItem(this.ID));
  }

  public isLoggedIn(): boolean {
    let loggedIn = localStorage.getItem(this.LOGGEDIN);

    // just in case loggedIn isn't in local storage
    if (loggedIn == null) {
      localStorage.setItem(this.LOGGEDIN, 'false');
      loggedIn = localStorage.getItem(this.LOGGEDIN);
    }

    return (loggedIn === 'true');
  }

  public logout() {
    localStorage.removeItem(this.ID);
    localStorage.removeItem(this.USERNAME);
    localStorage.removeItem(this.TOKEN);
    localStorage.setItem(this.LOGGEDIN, 'false');
  }
}
>>>>>>> 9809e184ec3770f980361ff362d145efc30afabc
