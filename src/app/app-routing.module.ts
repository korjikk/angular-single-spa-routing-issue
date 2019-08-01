import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstChildComponent } from './first-child/first-child.component';
import { SecondChildComponent } from './second-child/second-child.component';


const routes: Routes = [{
  path: 'first-child', component: FirstChildComponent
},
{
  path: 'second-child', component: SecondChildComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
