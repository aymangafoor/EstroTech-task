import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DevicesComponent } from './devices/devices.component';
import { HomeComponent } from './home/home.component';
import { SingleDeviceComponent } from './single-device/single-device.component';
export const routes: Routes = [
  {
    path: '',
    title: 'Dashboard',
    component: HomeComponent,
  },
  {
    path: 'devices',
    title: 'Device List',
    component: DevicesComponent,
  },
  {
    path: 'devices/:name',
    component: SingleDeviceComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // ✅ Use `forRoot`
  exports: [RouterModule],
})
export class AppRoutingModule {}
