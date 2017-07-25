import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

import 'rxjs/add/operator/filter';
import { AuthService } from '../auth/auth.service';

interface MenuItem {
  name: string;
  slug: string;
}

const menuItem = [{
  name: 'Publier une annonce',
  slug: 'publier-une-annonce'
}, {
    name: 'Touver un covaliseur',
    slug: 'trouver-un-covaliseur'
  }, {
    name: 'Comment ça marche',
    slug: 'comment-ca-marche'
  }, {
    name: 'Mon compte',
    slug: 'mon-compte'
  }, {
    name: 'Contact',
    slug: 'contact'
  }];

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() navToggled = new EventEmitter();
  navOpen = false;
  menuItem: MenuItem[] = menuItem;

  constructor(private router: Router, public auth: AuthService) { }

  ngOnInit() {
    // If nav is open after routing, close it
    this.router.events
      .filter(event => event instanceof NavigationStart && this.navOpen)
      .subscribe(event => this.toggleNav());
  }

  toggleNav() {
    this.navOpen = !this.navOpen;
    this.navToggled.emit(this.navOpen);
  }
}
