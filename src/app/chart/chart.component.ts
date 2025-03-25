import { Component, AfterViewInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import data0 from '../../assets/data_0.json';
import data1 from '../../assets/data_1.json';

Chart.register(...registerables);

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent implements AfterViewInit {
  chart: any;
  ngAfterViewInit() {
    this.generateChart();
  }
  generateChart() {
    const bigData = this.generateBigData();
    const data_0 = this.generateData0();
    const data_1 = this.generateData1();

    this.chart = new Chart('bigDataChart', {
      type: 'line',
      data: {
        labels: bigData.map((_, i) => `${i}`),
        datasets: [
          {
            label: 'Data 2',
            data: bigData,
            borderColor: '#26A2E9',
            pointStyle: 'circle',
            backgroundColor: '#26A2E9',
            borderWidth: 1,
            pointRadius: 2,
          },
          {
            label: 'Data 1',
            data: data_1,
            borderColor: '#00A44B',
            backgroundColor: '#00A44B',
            borderWidth: 1,
            pointRadius: 2,
          },
          {
            label: 'Data 0',
            data: data_0,
            borderColor: '#DD2D24',
            backgroundColor: '#DD2D24',
            borderWidth: 1,
            pointRadius: 2,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: false, // Disable animations for large datasets
        layout: {
          padding: { bottom: 90 },
        },
        plugins: {
          tooltip: {
            enabled: true,
          },
          legend: {
            labels: {
              usePointStyle: true,
              pointStyle: 'circle',
              boxHeight: 8,
              boxWidth: 8,
              pointStyleWidth: 8,
              padding: 24,
              color: '#8C8B93',
              font: {
                size: 12,
              },
            },
          },
        },
        scales: {
          x: {
            display: true,
            grid: {
              display: false,
              color: '#6E7079',
              tickLength: 1,
              tickWidth: 1,
            },
            min: 0,
            max: 24,
            ticks: { stepSize: 1 },
          },
          y: {
            display: true,
            grid: { color: '#6E7079' },
            min: 0,
            max: 250,
            ticks: { stepSize: 50 },
          },
        },
      },
    });
  }
  generateData0() {
    return data0.map((x) => x.data);
  }
  generateData1() {
    return data1.map((x) => x.data);
  }
  generateBigData() {
    return data0.map((x, i) => x.data + data1[i].data);
  }
  downloadChart() {
    const canvas = document.getElementById('bigDataChart') as HTMLCanvasElement;
    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png'); // ✅ Convert to PNG
    link.download = 'chart.png'; // ✅ Set download file name
    link.click(); // ✅ Trigger the download
  }
}
