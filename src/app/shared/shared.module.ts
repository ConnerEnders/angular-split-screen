import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ClarityModule } from '@clr/angular';

import { SidebarComponent } from './sidebar/sidebar.component';
import { PortalSidebarComponent } from './portal-sidebar/portal-sidebar.component';
import { ContentContainerComponent } from './content-container/content-container.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [SidebarComponent, PortalSidebarComponent, ContentContainerComponent, HeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    ClarityModule
  ],
  exports: [CommonModule, ClarityModule, ContentContainerComponent, HeaderComponent]
})
export class SharedModule { }
