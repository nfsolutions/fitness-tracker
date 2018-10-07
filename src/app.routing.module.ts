import {NgModule} from '@angular/core';
import {WelcomeComponent} from './app/welcome/welcome.component';
import {AuthGuard} from './app/auth/auth.guard';
import {RouterModule, Routes} from '@angular/router';

// TODO stn load children should be ./training/training.module#TrainingModule, but that doesnt work...
const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'training', loadChildren: 'src/app/training/training.module#TrainingModule', canLoad: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {

}
