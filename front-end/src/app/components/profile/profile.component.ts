import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Missions } from 'src/app/models/Missions';
import { Rocket } from 'src/app/models/Rocket';
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';

interface AppState {
  rockets: Rocket[],
  missions: Missions[],
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  rockets?:Rocket[];
  missions?:Missions[];
  RESERVE_ROCKET = 'spacetravelers/rockets/reserve_rocket';
  JOIN_MISSION = 'spacetravelers/missions/join_mission';
  faCircleQuestion = faCircleQuestion;

  constructor(private store: Store<AppState>) { 
    this.store.select('rockets').subscribe(rockets => this.rockets = rockets.filter(rocket => !!rocket['reserved']));
    this.store.select('missions').subscribe(missions => this.missions = missions.filter(mission => !! mission['member']));
  }

  ngOnInit(): void {
    console.log(this.missions);
  }

  displayId(id:string|undefined){
    this.store.dispatch({
      type: this.RESERVE_ROCKET,
      payload: id,
    });
  }

  toggleMember(id:string){
    this.store.dispatch({
      type: this.JOIN_MISSION,
      payload: id,
    });
  }


}
