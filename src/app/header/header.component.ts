import { Component, AfterViewInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
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
  constructor(public globalService: GlobalService) {}
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
  }
  logout() {
    localStorage.removeItem('uname');
    this.open = false;
    alert('Logged Out successfully');
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
  }
}
