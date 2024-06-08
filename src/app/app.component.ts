import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';
  navLinks = [
    { path: 'home', label: 'Home', icon: 'home' },
    { path: 'about', label: 'About', icon: 'person' },
    { path: 'projects', label: 'Projects', icon: 'work' },
    { path: 'skills', label: 'Skills', icon: 'build' },
    { path: 'contact', label: 'Contact', icon: 'contact_mail' }
  ];

  sidenavOpened: boolean = true;

  @ViewChild('sidenav')
  sidenav!: MatSidenav;

  toggleSidenav() {
    this.sidenavOpened = !this.sidenavOpened;
  }
}
