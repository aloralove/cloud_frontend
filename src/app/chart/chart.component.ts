import { Component, OnInit } from '@angular/core';
import { Chart, BarController, CategoryScale, LinearScale } from 'chart.js';
import { registerables } from 'chart.js';
Chart.register(...registerables);


Chart.register(BarController, CategoryScale, LinearScale);


@Component({
  selector: 'app-chart',
  template: '<canvas id="myChart"></canvas>',
})
export class ChartComponent implements OnInit {

  private myChart: any; // keep a reference to the chart

  ngOnInit() {
    this.myChart = new Chart('myChart', {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: 'Colors',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
        }]
      }
    });
  }

  ngOnDestroy() {
    if (this.myChart) {
      this.myChart.destroy(); // destroy the chart instance
    }
  }
}
