import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ChartComponent } from '../chart/chart.component';
import { PieChartComponent } from '../pie-chart/pie-chart.component';
import jsonData from '../../assets/deviceData.json';
import { EngagementMetricsComponent } from '../engagement-metrics/engagement-metrics.component';

@Component({
  selector: 'app-home',
  imports: [
    HeaderComponent,
    ChartComponent,
    PieChartComponent,
    EngagementMetricsComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  device_active: any = jsonData.filter((x: any, i: number) => i < 3);
  off_device: any = jsonData.filter((x: any) => x.status == 'Offline');
  formatDate(isoDate: string): string {
    const date = new Date(isoDate);

    // Format Date as DD/MM/YYYY at HH:mm:ss A
    const formattedDate =
      date.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      }) +
      ' at ' +
      date.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      });

    // Calculate time difference
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();

    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const diffHours = Math.floor(
      (diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

    const timeAgo = `${diffDays} Days ${diffHours} Hours ${diffMinutes} Minutes Ago`;

    return `${formattedDate}`;
  }
  dateDiff(isoDate: string): string {
    const date = new Date(isoDate);

    // Format Date as DD/MM/YYYY at HH:mm:ss A
    const formattedDate =
      date.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      }) +
      ' at ' +
      date.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      });

    // Calculate time difference
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();

    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const diffHours = Math.floor(
      (diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

    const timeAgo = `${diffDays} Days ${diffHours} Hours ${diffMinutes} Minutes Ago`;
    return `${timeAgo}`;
  }
}
