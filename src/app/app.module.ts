import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { HttpClientModule} from '@angular/common/http';
import { LineTimeComponent } from './line-time/line-time.component';
import { BarComponent } from './bar/bar.component';
import { PieComponent } from './pie/pie.component';
import { AngularMaterialModule } from './angular-material.module';
import { ListComponent } from './list/list.component';
import { AppNavComponent } from './app-nav/app-nav.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { AreaComponent } from './area/area.component';
import { ListCaseComponent } from './list-case/list-case.component';
import { KoreaComponent } from './korea/korea.component';
import { NumberCardComponent } from './number-card/number-card.component';
import { PhComponent } from './ph/ph.component';
import { VbarComponent } from './vbar/vbar.component';
import { VlineComponent } from './vline/vline.component';



@NgModule({
  declarations: [
    AppComponent,
    LineTimeComponent,
    BarComponent,
    PieComponent,  
    ListComponent, AppNavComponent, AppFooterComponent, AreaComponent, ListCaseComponent, KoreaComponent, NumberCardComponent, PhComponent, VbarComponent, VlineComponent
  ],
  imports: [
    NgbModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    AngularMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
