import { Component, OnInit } from '@angular/core';

import { NavService } from '../services/nav.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(public nav: NavService, public auth: AuthService) {}
}
