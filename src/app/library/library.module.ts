import { NgModule } from '@angular/core';

import { LibraryRoutingModule } from './library-routing.module';
import { LibraryComponent } from './library.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [LibraryComponent],
  imports: [
    LibraryRoutingModule,
    SharedModule
  ]
})
export class LibraryModule { }
