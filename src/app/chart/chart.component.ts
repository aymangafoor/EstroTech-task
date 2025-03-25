import { Component, AfterViewInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

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
  data0 = [
    {
      hour: 0,
      data: 10,
    },
    {
      hour: 1,
      data: 30,
    },
    {
      hour: 2,
      data: 50,
    },
    {
      hour: 3,
      data: 10,
    },
    {
      hour: 4,
      data: 30,
    },
    {
      hour: 5,
      data: 50,
    },
    {
      hour: 6,
      data: 10,
    },
    {
      hour: 7,
      data: 30,
    },
    {
      hour: 8,
      data: 50,
    },
    {
      hour: 9,
      data: 10,
    },
    {
      hour: 10,
      data: 30,
    },
    {
      hour: 11,
      data: 50,
    },
    {
      hour: 12,
      data: 10,
    },
    {
      hour: 13,
      data: 30,
    },
    {
      hour: 14,
      data: 50,
    },
    {
      hour: 15,
      data: 10,
    },
    {
      hour: 16,
      data: 30,
    },
    {
      hour: 17,
      data: 50,
    },
    {
      hour: 18,
      data: 10,
    },
    {
      hour: 19,
      data: 30,
    },
    {
      hour: 20,
      data: 50,
    },
    {
      hour: 21,
      data: 10,
    },
    {
      hour: 22,
      data: 30,
    },
    {
      hour: 23,
      data: 50,
    },
  ];
  data1 = [
    {
      hour: 0,
      data: 10,
    },
    {
      hour: 1,
      data: 30,
    },
    {
      hour: 2,
      data: 50,
    },
    {
      hour: 3,
      data: 10,
    },
    {
      hour: 4,
      data: 30,
    },
    {
      hour: 5,
      data: 50,
    },
    {
      hour: 6,
      data: 10,
    },
    {
      hour: 7,
      data: 30,
    },
    {
      hour: 8,
      data: 50,
    },
    {
      hour: 9,
      data: 10,
    },
    {
      hour: 10,
      data: 30,
    },
    {
      hour: 11,
      data: 50,
    },
    {
      hour: 12,
      data: 10,
    },
    {
      hour: 13,
      data: 30,
    },
    {
      hour: 14,
      data: 50,
    },
    {
      hour: 15,
      data: 10,
    },
    {
      hour: 16,
      data: 30,
    },
    {
      hour: 17,
      data: 50,
    },
    {
      hour: 18,
      data: 10,
    },
    {
      hour: 19,
      data: 30,
    },
    {
      hour: 20,
      data: 50,
    },
    {
      hour: 21,
      data: 10,
    },
    {
      hour: 22,
      data: 30,
    },
    {
      hour: 23,
      data: 50,
    },
  ];
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
          x: { display: false, grid: { display: false } },
          y: {
            display: true,
            grid: { color: '#E0E6F1' },
            min: 0,
            max: 250,
            ticks: { stepSize: 50 },
          },
        },
      },
    });
  }
  generateData0() {
    return this.data0.map((x) => x.data);
  }
  generateData1() {
    return this.data1.map((x) => x.data);
  }
  generateBigData() {
    return this.data0.map((x, i) => x.data + this.data1[i].data);
  }
  downloadChart() {
    const canvas = document.getElementById('bigDataChart') as HTMLCanvasElement;
    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png'); // ✅ Convert to PNG
    link.download = 'chart.png'; // ✅ Set download file name
    link.click(); // ✅ Trigger the download
  }
}
