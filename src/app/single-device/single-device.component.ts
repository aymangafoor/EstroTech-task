import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import jsonData from '../../assets/deviceData.json';
import { HeaderComponent } from '../header/header.component';
import { ChartComponent } from '../chart/chart.component';
import { PieChartComponent } from '../pie-chart/pie-chart.component';
import { EngagementMetricsComponent } from '../engagement-metrics/engagement-metrics.component';
import { UptimeComponent } from '../uptime/uptime.component';

@Component({
  selector: 'app-single-device',
  imports: [
    HeaderComponent,
    ChartComponent,
    EngagementMetricsComponent,
    UptimeComponent,
  ],
  templateUrl: './single-device.component.html',
  styleUrl: './single-device.component.css',
})
export class SingleDeviceComponent {
  name: string;
  data: any;
  date: Date = new Date();
  tab: string = 'analytics';
  constructor(private route: ActivatedRoute) {
    this.name = this.route.snapshot.paramMap.get('name') || '';
    console.log('route is: ', this.name);
    this.data = jsonData.find(
      (x: any) => x.deviceName.toLowerCase() == this.name
    );
  }
  changetab(value: string) {
    this.tab = value;
  }
}
