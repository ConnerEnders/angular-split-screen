import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogsComponent } from './logs.component';
import { LogComponent } from './log/log.component';

const routes: Routes = [
  { path: '', component: LogsComponent },
  { path: ':id', component: LogComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogsRoutingModule { }
