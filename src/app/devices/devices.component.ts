import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import jsonData from '../../assets/deviceData.json';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-devices',
  imports: [HeaderComponent, RouterLink],
  templateUrl: './devices.component.html',
  styleUrl: './devices.component.css',
})
export class DevicesComponent {
  devices: any;
  keyword: string;
  sort_type: string;
  openSort: boolean;
  constructor() {
    this.devices = jsonData;
    this.keyword = '';
    this.sort_type = '';
    this.openSort = false;
  }
  setKeyword(event: Event) {
    this.keyword = (event.target as HTMLInputElement).value;
  }
  search() {
    if (this.keyword == '') {
      this.devices = jsonData;
    } else if (this.keyword.length < 3) {
      alert('Enter atleast 3 letter');
    } else {
      this.devices = jsonData.filter((x: any) => {
        let name = x.deviceName.toLowerCase(),
          keyword = this.keyword.toLocaleLowerCase();
        return name.includes(keyword);
      });
      console.log(
        jsonData.filter((x: any) => {
          let name = x.deviceName.toLowerCase(),
            keyword = this.keyword.toLocaleLowerCase();
          return name.includes(keyword);
        })
      );
    }
  }
  filter() {
    this.openSort = !this.openSort;
  }
  sort(type: string) {
    console.log(`calling sort of ${type}`);
    this.sort_type = type;
    if (type === 'high_to_low') {
      let final = this.devices.sort(
        (a: any, b: any) =>
          b.hw_data.battery.percentage.replace('%', '') -
          a.hw_data.battery.percentage.replace('%', '')
      );
      this.devices = final;
      console.log('sorted', final);
    } else {
      let final = this.devices.sort(
        (a: any, b: any) =>
          a.hw_data.battery.percentage.replace('%', '') -
          b.hw_data.battery.percentage.replace('%', '')
      );
      this.devices = final;
      console.log('sorted', final);
    }
  }
}
