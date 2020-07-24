import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { KoreaComponent } from './korea/korea.component';
import { PhComponent } from './ph/ph.component';


const routes: Routes = [
  { path: '', component: PhComponent },
  { path: 'korea', component: KoreaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
