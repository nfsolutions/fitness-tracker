import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WelcomeComponent} from './app/welcome/welcome.component';
import {AuthGuard} from './app/auth/auth.guard';

// TODO stn load children should be ./training/training.module#TrainingModule, but that doesnt work...
const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'training', loadChildren: 'src/app/training/training.module#TrainingModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {

}
