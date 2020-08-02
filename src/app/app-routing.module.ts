import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './shared/guards/auth.guard';
import { ErrorPageComponent } from './shared/error-page/error-page.component';

const SECONDARY_OUTLET = "secondary";

const mainRoutes: Routes = [
  { path: 'portals', loadChildren: () => import('./portals/portals.module').then(m => m.PortalsModule) },
  { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
  { path: 'library', loadChildren: () => import('./library/library.module').then(m => m.LibraryModule) },
]

let routes: Routes = [
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: '', redirectTo: 'portals', pathMatch: 'full'},
];

mainRoutes.forEach(route => {
  route.canActivate = [AuthGuard];
  route.canActivateChild = [AuthGuard];
  route.data = { showHeaderActions: true };
  routes.push(route);
  route = { ...route, outlet: SECONDARY_OUTLET};
  routes.push(route);
})

routes.push({ path: '**', component: ErrorPageComponent });
routes.push({ path: '**', component: ErrorPageComponent, outlet: SECONDARY_OUTLET });

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
