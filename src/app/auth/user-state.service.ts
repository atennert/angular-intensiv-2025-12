import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserStateService {
  private _isLoggedIn = true;

  login() {
    this._isLoggedIn = true;
  }

  logout() {
    this._isLoggedIn = false;
  }

  isLoggedIn(): boolean {
    return this._isLoggedIn;
  }
}
