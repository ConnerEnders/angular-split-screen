import { NgModule } from '@angular/core';

import { LogsRoutingModule } from './logs-routing.module';
import { LogsComponent } from './logs.component';
import { LogComponent } from './log/log.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [LogsComponent, LogComponent],
  imports: [
    LogsRoutingModule,
    SharedModule
  ]
})
export class LogsModule { }
