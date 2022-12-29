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
  RESERVE_ROCKET = 'spacetravelers/rockets/reserve_rocket';
  faCircleQuestion = faCircleQuestion;

  constructor(private store: Store<AppState>) { 
    this.store.select('rockets').subscribe(rockets => this.rockets = rockets.filter(rocket => !!rocket['reserved']));
  }

  ngOnInit(): void {
    console.log(this.rockets)
  }

  displayId(id:string|undefined){
    this.store.dispatch({
      type: this.RESERVE_ROCKET,
      payload: id,
    });
  }


}
