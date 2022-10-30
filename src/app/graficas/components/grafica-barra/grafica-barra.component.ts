import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartDataset, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [
  ]
})
export class GraficaBarraComponent implements OnInit {
  
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  @Input() barChartData: ChartData<"bar"> = { datasets: [] };
  @Input() labels: string[] = [];
  @Input() horizontal: boolean = false;
  
  
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    indexAxis: 'x',
    scales: {
      x: {},
      y: {
        min: 10
      }
    }
  };

  public barChartType: ChartType = 'bar';
  
  constructor() { }

  ngOnInit(): void {

    if(this.horizontal) {
      this.barChartOptions!.indexAxis = 'y';
      this.barChartOptions!.scales!["y"]!.min = 0;
    }
    this.barChartData.labels = this.labels;
  }

}
