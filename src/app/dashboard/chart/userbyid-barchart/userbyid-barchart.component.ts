import { Component, Input } from '@angular/core';
import { ChartOptions } from 'chart.js';
@Component({
  selector: 'app-userbyid-barchart',
  templateUrl: './userbyid-barchart.component.html',
  styleUrls: ['./userbyid-barchart.component.css']
})
export class UserbyidBarchartComponent {
  @Input() commandsData!: any[];

  barChartOptions: ChartOptions = {
    responsive: false,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value) => (Number.isInteger(value) ? value : ''),
        },
      },
    },
  };
  chartData: any;

  constructor() {}

  ngOnInit(): void {
    if (this.commandsData) {
      // Calculate total amount against dateCommand
      const dataMap = new Map<string, number>();
      this.commandsData.forEach((command) => {
          const dateCommand = command.dateCommand;
          const totalAmount = command.totalAmount;

          if (dateCommand && totalAmount) {
            // Accumulate total amount for each dateCommand
            dataMap.set(dateCommand, (dataMap.get(dateCommand) || 0) + totalAmount);
          }
      });

      // Extract labels and data from the calculated dataMap
      const labels = Array.from(dataMap.keys());
      const data = Array.from(dataMap.values());

      const borderWidth = 2;

      this.chartData = {
        labels: labels,
        datasets: [
          {
            label: 'Total Commands per year',
            data: data,
            borderWidth: borderWidth,
          },
        ],
      };
    }
  }
}