import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WelcomeComponent} from './app/welcome/welcome.component';
import {TrainingComponent} from './app/training/training.component';
import {AuthGuard} from './app/auth/auth.guard';

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'training', component: TrainingComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {

}
