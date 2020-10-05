import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CordelDetailComponent } from './cordels/cordel-detail/cordel-detail.component';
import { CordelListComponent } from './cordels/cordel-list/cordel-list.component';
import { AppComponent } from './app.component';
import { CallToActionComponent } from './template/call-to-action/call-to-action.component';
import { CordelFormComponent } from './cordels/cordel-form/cordel-form.component';
import { LoginComponent } from './auth/login/login.component';


const routes: Routes = [
  {path:'cordel/all', component: CordelListComponent},
  {path:'cordel/new', component: CordelFormComponent},
  {path:'cordel/:id', component: CordelDetailComponent},
  {path:'login', component: LoginComponent},
  {path:'', component: CallToActionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
