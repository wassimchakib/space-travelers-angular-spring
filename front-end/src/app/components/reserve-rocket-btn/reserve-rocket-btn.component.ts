import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-reserve-rocket-btn',
  templateUrl: './reserve-rocket-btn.component.html',
  styleUrls: ['./reserve-rocket-btn.component.css']
})
export class ReserveRocketBtnComponent implements OnInit {
  @Input() reserved:boolean | undefined;
  @Input() id:string | undefined;
  @Output() btnEvent = new EventEmitter();

  onReserveBtn(id:string | undefined) {
    this.btnEvent.emit(id);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
