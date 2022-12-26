import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MissionsComponent } from './components/missions/missions.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RocketsComponent } from './components/rockets/rockets.component';

const routes: Routes = [
  {path: 'rockets', component: RocketsComponent},
  {path: 'missions', component: MissionsComponent},
  {path: 'profile', component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
