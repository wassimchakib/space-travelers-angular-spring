import { Component, Input, OnInit } from '@angular/core';
import { Missions } from 'src/app/models/Missions';
import { MissionsService } from 'src/app/services/missions.service';

@Component({
  selector: 'app-mission-card',
  templateUrl: './mission-card.component.html',
  styleUrls: ['./mission-card.component.css']
})
export class MissionCardComponent implements OnInit {
  missions!:Missions[];

  constructor(missionsService: MissionsService) { 
    this.missions = missionsService.getMissions();
  }

  ngOnInit(): void {
  }

  toggleMember(id:string){
    this.missions = this.missions.map((mission) => (
      mission.id !== id ? mission : {...mission, member: !mission.member}
    ));
  }

}
