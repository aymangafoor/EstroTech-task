import { AfterViewInit, Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-uptime',
  imports: [],
  templateUrl: './uptime.component.html',
  styleUrl: './uptime.component.css',
})
export class UptimeComponent implements AfterViewInit {
  chart: any;
  ngAfterViewInit(): void {
    this.createChart();
  }
  createChart(): void {
    this.chart = new Chart('uptimeChart', {
      type: 'bar',
      data: {
        labels: ['Offline,Online'],
        datasets: [
          {
            label: 'Offline',
            data: [6],
            backgroundColor: '#DD2D24',
            barPercentage: 1.0,
            categoryPercentage: 1.0,
            borderSkipped: false,
            borderRadius: 8,
          },
          {
            label: 'Online',
            data: [3],
            backgroundColor: '#00A94F',
            barPercentage: 1.0,
            categoryPercentage: 1.0,
            borderSkipped: false,
          },
          {
            label: 'Offline',
            data: [5],
            backgroundColor: '#DD2D24',
            barPercentage: 1.0,
            categoryPercentage: 1.0,
            borderSkipped: false,
          },
          {
            label: 'Online',
            data: [4],
            backgroundColor: '#00A94F',
            barPercentage: 1.0,
            categoryPercentage: 1.0,
            borderSkipped: false,
          },
          {
            label: 'Other',
            data: [6],
            backgroundColor: '#333333',
            barPercentage: 1.0,
            categoryPercentage: 1.0,
            borderSkipped: false,
            borderRadius: 8,
          },
        ],
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            stacked: true,
            display: true,
            ticks: { stepSize: 1, color: 'white', font: { size: 12 } },
            grid: {
              display: true,
              tickColor: 'white',
              tickLength: 8,
            },
            max: 24,
          },
          y: {
            stacked: true,
            display: true,
            grid: {
              display: false,
            },
            ticks: {
              display: false,
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            enabled: false,
          },
          title: {
            text: 'Engagement Rate',
            align: 'start',
          },
        },
        layout: {
          padding: {
            top: 20,
          },
        },
      },
    });
  }
  setVisible(index: number) {
    const meta = this.chart.getDatasetMeta(index);
    console.log('calling visible', meta);
    meta.hidden =
      meta.hidden === null ? !this.chart.isDatasetVisible(index) : null;
    meta.visible = meta.visible === true ? false : true;
    this.chart.update();
  }
}
