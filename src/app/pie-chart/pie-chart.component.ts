import { Component, AfterViewInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables); // Register Chart.js modules

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css'],
})
export class PieChartComponent implements AfterViewInit {
  chart: any;

  ngAfterViewInit() {
    this.createPieChart();
  }

  createPieChart() {
    this.chart = new Chart('pieChartCanvas', {
      type: 'doughnut',
      data: {
        labels: ['Online', 'Offline'],
        datasets: [
          {
            label: 'Sample Data',
            data: [50, 50], // Values for each section
            backgroundColor: ['#00A44B', '#DD2D24'],
            borderWidth: 0,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '50%',
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              boxWidth: 16, // ✅ Legend Box Size
              boxHeight: 7,
              padding: 16, // ✅ Increases spacing between legend items
              usePointStyle: false, // ✅ Uses circles instead of squares
              borderRadius: 10, // ✅ Legend item rounded corners
              color: 'white', // Legend text color
              font: {
                size: 14, // Legend text size
                weight: 'bold',
              },
            },
          },
        },
      },
    });
  }
  downloadChart() {
    const canvas = document.getElementById(
      'pieChartCanvas'
    ) as HTMLCanvasElement;
    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png');
    link.download = 'chart.png';
    link.click();
  }
}
