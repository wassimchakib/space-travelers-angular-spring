import { Component, OnInit } from '@angular/core';
import { Missions } from 'src/app/models/Missions';
import { MissionsService } from 'src/app/services/missions.service';

@Component({
  selector: 'app-missions',
  templateUrl: './missions.component.html',
  styleUrls: ['./missions.component.css']
})
export class MissionsComponent implements OnInit {
  missions:Missions[];
  
  constructor(missionsService: MissionsService) {
    this.missions = missionsService.getMissions();
   }

  ngOnInit(): void {
  }

}
