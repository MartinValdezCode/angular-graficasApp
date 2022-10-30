import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: [],
    datasets: [
      { 
        data: [],
        backgroundColor: [
          '#0075ED',
          '#00BAF7',
          '#00E0DB',
          '#00F7AD',
          '#00ED63',
        ] 
      }
    ]
  };

  public doughnutChartType: ChartType = 'doughnut';
  
  constructor(
    private graficasService: GraficasService
  ) { }

  ngOnInit(): void {
    // this.graficasService.getDataDonut()
    //   .subscribe(data => {
    //     const labels = Object.keys(data);
    //     const values = Object.values(data);
    //     this.doughnutChartData.labels = labels;
    //     this.doughnutChartData.datasets[0].data = values;
    //   });

    this.graficasService.getUsuariosRedesSocialesData()
      .subscribe(({labels, values}) => {
        this.doughnutChartData.labels = labels
        this.doughnutChartData.datasets[0].data = values
      });
  }

}
