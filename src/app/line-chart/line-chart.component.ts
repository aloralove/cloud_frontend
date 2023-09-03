import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chart } from 'chart.js';
import { environment } from 'src/environments/environments.prod';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {
  chart: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.initChart();
    this.fetchData();
  }

  initChart() {
    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: [], // You'll fill these in with real data
        datasets: [{
          label: 'My Data',
          data: [], // You'll fill this in with real data
          borderColor: '#3cba9f',
          fill: false
        }]
      },
      options: {
        // Various chart options can go here
      }
    });
  }

  fetchData() {
    this.http.get<any[]>('${environment.apiUrl}/data').subscribe(data => {
      const labels = data.map(row => row.someField);  // Replace 'someField' with the actual field name
      const values = data.map(row => row.anotherField);  // Replace 'anotherField' with the actual field name

      this.chart.data.labels = labels;
      this.chart.data.datasets[0].data = values;
      this.chart.update();
    });
  }
}
