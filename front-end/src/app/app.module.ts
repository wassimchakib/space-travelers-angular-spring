import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RocketsComponent } from './components/rockets/rockets.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MissionsComponent } from './components/missions/missions.component';
import { RocketCardComponent } from './components/rocket-card/rocket-card.component';
import { ReserveRocketBtnComponent } from './components/reserve-rocket-btn/reserve-rocket-btn.component';
import { MissionCardComponent } from './components/mission-card/mission-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RocketsComponent,
    ProfileComponent,
    MissionsComponent,
    RocketCardComponent,
    ReserveRocketBtnComponent,
    MissionCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
