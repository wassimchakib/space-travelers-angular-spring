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
import { JoinMissionBtnComponent } from './components/join-mission-btn/join-mission-btn.component';
import { StoreModule } from '@ngrx/store';
import { rocketReducer } from './rocket.reducer';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { missionReducer } from './mission.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RocketsComponent,
    ProfileComponent,
    MissionsComponent,
    RocketCardComponent,
    ReserveRocketBtnComponent,
    MissionCardComponent,
    JoinMissionBtnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    StoreModule.forRoot({rockets: rocketReducer, missions: missionReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
