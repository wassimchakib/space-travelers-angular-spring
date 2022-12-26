import { Component, OnInit } from '@angular/core';
import { Rocket } from 'src/app/models/Rocket';
import { RocketsService } from 'src/app/services/rockets.service';

@Component({
  selector: 'app-rockets',
  templateUrl: './rockets.component.html',
  styleUrls: ['./rockets.component.css']
})
export class RocketsComponent implements OnInit {
  rockets:Rocket[];

  constructor(rocketService: RocketsService) { 
    this.rockets = rocketService.getRockets();
  }

  ngOnInit(): void {
  }

}
