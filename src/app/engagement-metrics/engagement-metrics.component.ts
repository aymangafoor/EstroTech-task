import { Component, AfterViewInit, Input } from '@angular/core';
import { Chart, registerables } from 'chart.js';

// Register all Chart.js components
Chart.register(...registerables);
@Component({
  selector: 'app-engagement-metrics',
  imports: [],
  templateUrl: './engagement-metrics.component.html',
  styleUrl: './engagement-metrics.component.css',
})
export class EngagementMetricsComponent implements AfterViewInit {
  chart: any;
  chart1: any;

  ngAfterViewInit(): void {
    this.createChart();
  }
  @Input() label1: string = '';
  @Input() label2: string = '';
  @Input() label3: string = '';
  constructor() {
    console.log('label is', this.label1);
  }

  createChart(): void {
    this.chart = new Chart('progressChart', {
      type: 'bar',
      data: {
        labels: ['Data 0'],
        datasets: [
          {
            label: 'Progress',
            data: [50],
            backgroundColor: '#00A94F',
            barPercentage: 1.0,
            categoryPercentage: 1.0,
            borderRadius: 8,
            borderSkipped: false,
          },
          {
            label: 'Remaining',
            data: [50],
            backgroundColor: '#333333',
            barPercentage: 1.0,
            categoryPercentage: 1.0,
            borderRadius: 8,
            borderSkipped: false,
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
            display: false,
            grid: {
              display: false,
            },
            max: 100,
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
            x: 0,
          },
        },
      },
    });
    this.chart1 = new Chart('progressChart1', {
      type: 'bar',
      data: {
        labels: ['Data 1'],
        datasets: [
          {
            label: 'Progress',
            data: [50],
            backgroundColor: '#DD2D24',
            barPercentage: 1.0,
            categoryPercentage: 1.0,
            borderRadius: 8,
            borderSkipped: false,
          },
          {
            label: 'Remaining',
            data: [50],
            backgroundColor: '#333333',
            barPercentage: 1.0,
            categoryPercentage: 1.0,
            borderRadius: 8,
            borderSkipped: false,
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
            display: false,
            grid: {
              display: false,
            },
            max: 100,
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
          title: {
            text: 'Pre-Engagement Rate',
            align: 'start',
          },
          tooltip: {
            enabled: false,
          },
          // datalabels: {
          //   display: false,
          // },
        },
        layout: {
          padding: {
            x: 0,
          },
        },
      },
    });

    // Add the percentage labels
    if (typeof document !== 'undefined') {
      this.addPercentageLabels();
      this.addPercentageLabels1();
    }
  }

  addPercentageLabels(): void {
    // Create container for the chart
    const chartContainer = document.getElementById('chartContainer');
    if (!chartContainer) return;
    const labels = document.createElement('div');
    labels.className = 'flex justify-between mb-2';
    chartContainer.prepend(labels);
    // Add left percentage label
    const leftLabel = document.createElement('div');
    leftLabel.innerText = '50%';
    leftLabel.className =
      'percentage-label text-xs font-medium left-label text-[#00A44B]';
    labels.appendChild(leftLabel);

    // Add right percentage label
    const rightLabel = document.createElement('div');
    rightLabel.innerText = '50';
    rightLabel.className =
      'percentage-label text-xs font-medium right-label text-[#00A44B]';
    labels.appendChild(rightLabel);
  }
  addPercentageLabels1(): void {
    // Create container for the chart
    const chartContainer = document.getElementById('chartContainer1');
    if (!chartContainer) return;
    const labels = document.createElement('div');
    labels.className = 'flex justify-between mb-2';
    chartContainer.prepend(labels);
    // Add left percentage label
    const leftLabel = document.createElement('div');
    leftLabel.innerText = '50%';
    leftLabel.className =
      'percentage-label text-xs font-medium left-label text-[#DD2D24]';
    labels.appendChild(leftLabel);

    // Add right percentage label
    const rightLabel = document.createElement('div');
    rightLabel.innerText = '50';
    rightLabel.className =
      'percentage-label text-xs font-medium right-label text-[#DD2D24]';
    labels.appendChild(rightLabel);
  }
}
