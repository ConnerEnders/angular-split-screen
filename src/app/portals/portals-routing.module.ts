import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PortalsComponent } from './portals.component';

const routes: Routes = [
  { path: '', component: PortalsComponent },
  { path: ':id', loadChildren: () => import('../portal/portal.module').then(m => m.PortalModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalsRoutingModule { }
