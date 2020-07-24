import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { single} from '../phdataconfirmed';

@Component({
  selector: 'app-vbar',
  templateUrl: './vbar.component.html',
  styleUrls: ['./vbar.component.css']
})
export class VbarComponent {

  single: any[];
  multi: any[];

  view: any[] = [1024, 720];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'City/Province';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() {
    Object.assign(this, { single })
  }

  onSelect(event) {
    console.log(event);
  }

}
