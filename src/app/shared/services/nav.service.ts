import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, PRIMARY_OUTLET } from '@angular/router';

export const SECONDARY_OUTLET = 'secondary';

@Injectable({
  providedIn: 'root'
})
export class NavService {
  showSecondaryOutlet = false;
  showHeaderActions = false;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showSecondaryOutlet = !!this.route.children.find(child => child.outlet == SECONDARY_OUTLET);
        this.showHeaderActions = !!this.route.firstChild.snapshot.data.showHeaderActions;
      }
    })
  }

  toggleSplitView() {
    let url = {outlets: {}};
    url.outlets[SECONDARY_OUTLET] = this.showSecondaryOutlet ? null : 'portals';
    this.router.navigate([url], { queryParamsHandling: 'merge' });
  }

  isSecondaryOutlet(route: ActivatedRoute) {
    return route.parent.outlet == SECONDARY_OUTLET || route.parent.parent.outlet == SECONDARY_OUTLET;
  }
}
