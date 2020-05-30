import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CordelDetailComponent } from './cordels/cordel-detail/cordel-detail.component';
import { CordelListComponent } from './cordels/cordel-list/cordel-list.component';


const routes: Routes = [
  {path:'cordel/:id', component: CordelDetailComponent},
  {path:'', component: CordelListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
