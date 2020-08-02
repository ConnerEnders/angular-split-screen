import { Injectable } from '@angular/core';
import { Router, PRIMARY_OUTLET } from '@angular/router';

import { SECONDARY_OUTLET } from './nav.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router) {}

  login() {
    localStorage.setItem('auth', 'token');
    this.router.navigate(['/portals']);
  }

  logout() {
    localStorage.removeItem('auth');
    let url = { outlets: {} };
    url.outlets[PRIMARY_OUTLET] = 'login';
    url.outlets[SECONDARY_OUTLET] = null;
    this.router.navigate([url]);
  }

  isAuthorized() {
    return localStorage.getItem('auth');
  }
}
