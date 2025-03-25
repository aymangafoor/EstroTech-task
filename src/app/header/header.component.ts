import { Component, AfterViewInit } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { GlobalService } from '../global.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  sideBarOpen = false;
  login: boolean = localStorage.getItem('uname') ? true : false;
  open = false;
  theme = 'Dark';
  username = localStorage.getItem('uname') || '';
  uname = '';
  pass = '';
  ngAfterViwInit() {}
  constructor(public globalService: GlobalService, private router: Router) {}
  toggleSidebar() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  menuItems = [
    { label: 'Dashboard', route: '/' },
    { label: 'Devices', route: '/devices' },
  ];
  profileBox() {
    this.open = !this.open;
  }
  toggleTheme() {
    this.globalService.setTheme(
      this.globalService.theme === 'Dark' ? 'Light' : 'Dark'
    );
    if (typeof document !== 'undefined') {
      document.body.style.backgroundColor =
        this.globalService.theme === 'Dark' ? '#1E1E1E' : 'white';
    }
  }
  logout() {
    localStorage.removeItem('uname');
    this.open = false;
    alert('Logged Out successfully');
    window.location.reload();
  }
  formSubmit(event: any) {
    event.preventDefault();

    let uname = event.target.uname.value,
      pass = event.target.pass.value;
    if (!uname || !pass) {
      alert('Enter all details');
    }
    console.log('uname', uname, 'pass', pass);
    localStorage.setItem('uname', uname);
    this.username = uname;
    this.login = true;
    this.open = false;
    this.router.navigate(['']);
  }
}
