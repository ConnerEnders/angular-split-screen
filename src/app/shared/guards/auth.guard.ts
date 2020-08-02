import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, UrlSegment, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../services/auth.service';
import { SECONDARY_OUTLET } from '../services/nav.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    if (!this.auth.isAuthorized()) {
      let tree = this.router.parseUrl('/login');
      if (tree.root.children[SECONDARY_OUTLET]) {
        tree.root.children[SECONDARY_OUTLET].segments = [new UrlSegment(null, {})];
      }
      return tree;
    }
    return true;
  }

  canActivateChild = this.canActivate
}
