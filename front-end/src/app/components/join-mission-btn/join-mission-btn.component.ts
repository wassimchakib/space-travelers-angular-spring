import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-join-mission-btn',
  templateUrl: './join-mission-btn.component.html',
  styleUrls: ['./join-mission-btn.component.css']
})
export class JoinMissionBtnComponent implements OnInit {
  @Input() member?:boolean;
  @Input() id?:string;

  @Output() joinEmit = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  joinClick(id?:string){
    this.joinEmit.emit(id);
  }

}
