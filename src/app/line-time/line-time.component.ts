import { Component, NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { map } from 'rxjs/operators';
import { Client } from '../model/Client';
import { DataService } from '../data.service';
import { multi } from '../linedata';



@Component({
  selector: 'app-line-time',
  templateUrl: './line-time.component.html',
  styleUrls: ['./line-time.component.css']
})
export class LineTimeComponent implements OnInit {

  multi: any[];
  view: any[] = [1024, 720];
  clients: Client[] = [];
  datus: any[];
  listahan: any[];
  count: number = 0;
  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Date';
  yAxisLabel: string = 'Population';
  timeline: boolean = true;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor(private dataService: DataService) {
    Object.assign(this, { multi });
  }

  ngOnInit() {
    this.getSuway();
  }
  getClients() {
    this.dataService.getClients().subscribe((response: any) => {
      this.listahan= (response.features);
      console.log(this.listahan[0].attributes);
      this.listahan.forEach(function (value) {
        console.log(value.attributes);
      });
    });
  }
  onClickMe() {
    console.log(this.clients)
  }
  getDatus() {
    console.log(this.datus)
  }
  getSuway() {
    this.dataService.getClients()
    .pipe(
      map((data: any) => (data.features))
    )
    .subscribe((response: any) => {
      this.listahan= (response);
      for (let i = 0; i < this.listahan.length; i++) 
      {
        this.count = this.count + 1;
        let addback = (this.listahan[i].attributes);
        this.clients = [
          ...this.clients, 
          addback
          ];
      }
    });
  }
  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
  test() {
    var bars = [
      {
        "name": "Japan",
        "series": this.clients
      }
    ];
  }

}
