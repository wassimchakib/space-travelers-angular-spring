import { Component, Input, OnInit } from '@angular/core';
import { Missions } from 'src/app/models/Missions';

@Component({
  selector: 'app-mission-card',
  templateUrl: './mission-card.component.html',
  styleUrls: ['./mission-card.component.css']
})
export class MissionCardComponent implements OnInit {
  @Input() missions!:Missions[];
  
  constructor() { 
  }

  ngOnInit(): void {
  }

}
