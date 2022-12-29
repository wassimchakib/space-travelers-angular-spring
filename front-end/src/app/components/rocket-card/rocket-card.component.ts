import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Rocket } from 'src/app/models/Rocket';

interface AppState {
  rockets: Rocket[],
}

@Component({
  selector: 'app-rocket-card',
  templateUrl: './rocket-card.component.html',
  styleUrls: ['./rocket-card.component.css']
})
export class RocketCardComponent implements OnInit {
  rockets:Observable<Rocket[]>;
  RESERVE_ROCKET = 'spacetravelers/rockets/reserve_rocket';

  constructor(private store: Store<AppState>) { 
    this.rockets = this.store.select('rockets');
  }

  ngOnInit(): void {
  }

  displayId(id:string|undefined){
    this.store.dispatch({
      type: this.RESERVE_ROCKET,
      payload: id,
    });
  }

}
