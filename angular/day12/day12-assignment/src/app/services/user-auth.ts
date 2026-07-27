import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  private isLogged = false;

  constructor() { }

  login(): void {
    this.isLogged = true;
  }

  logout(): void {
    this.isLogged = false;
  }

  isUserLogged(): boolean {
    return this.isLogged;
  }
}