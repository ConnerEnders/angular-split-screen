import { NgModule } from '@angular/core';

import { PortalsRoutingModule } from './portals-routing.module';
import { PortalsComponent } from './portals.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PortalsComponent],
  imports: [
    PortalsRoutingModule,
    SharedModule
  ]
})
export class PortalsModule { }
