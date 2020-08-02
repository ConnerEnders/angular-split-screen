import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PortalComponent } from './portal.component';

const routes: Routes = [{ path: '', component: PortalComponent, children: [
  { path: 'overview', loadChildren: () => import('../overview/overview.module').then(m => m.OverviewModule) },
  { path: 'logs', loadChildren: () => import('../logs/logs.module').then(m => m.LogsModule) },
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalRoutingModule { }
