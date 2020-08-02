import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NavService } from '../services/nav.service';

@Component({
  selector: 'app-content-container',
  templateUrl: './content-container.component.html',
  styleUrls: ['./content-container.component.css']
})
export class ContentContainerComponent implements OnInit {
  @Input() portalSidebar: boolean;
  isSecondaryOutlet: boolean;

  constructor(private route: ActivatedRoute, private nav: NavService) {}

  ngOnInit() {
    this.isSecondaryOutlet = this.nav.isSecondaryOutlet(this.route);
  }
}
