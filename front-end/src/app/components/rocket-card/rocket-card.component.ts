import { Component, OnInit, Input } from '@angular/core';
import { Rocket } from 'src/app/models/Rocket';

@Component({
  selector: 'app-rocket-card',
  templateUrl: './rocket-card.component.html',
  styleUrls: ['./rocket-card.component.css']
})
export class RocketCardComponent implements OnInit {
  @Input() rockets:Rocket[];

  constructor() { 
    this.rockets = [];
  }

  ngOnInit(): void {
  }

  displayId(id:string|undefined){
    this.rockets = this.rockets?.map(rocket => rocket.rocket_id === id ? {...rocket, reserved: !rocket?.['reserved']} : rocket);
  }

}
