import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Missions } from 'src/app/models/Missions';
interface AppState {
  missions: Missions[]
}

@Component({
  selector: 'app-mission-card',
  templateUrl: './mission-card.component.html',
  styleUrls: ['./mission-card.component.css']
})
export class MissionCardComponent implements OnInit {
  missions?:Missions[];
  JOIN_MISSION = 'spacetravelers/missions/join_mission';
  constructor(private store: Store<AppState>) { 
    this.store.select('missions').subscribe(missions => this.missions = missions);
  }

  ngOnInit(): void {
    console.log(this.missions);
  }

  toggleMember(id:string){
    this.store.dispatch({
      type: this.JOIN_MISSION,
      payload: id,
    });
  }

}
