import { Action } from "@ngrx/store";

export class RocketAction implements Action {
  readonly type = 'spacetravelers/rockets/reserve_rocket';
  
  constructor(public payload?: string){
  }
}