import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CordelDetailComponent } from './cordels/cordel-detail/cordel-detail.component';
import { CordelListComponent } from './cordels/cordel-list/cordel-list.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {path:'cordel/:id', component: CordelDetailComponent},
  {path:'', component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
