import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-treasure-hunt',
  templateUrl: './treasure-hunt.component.html',
  styleUrls: ['./treasure-hunt.component.css'],
})

//Needs to be renamed since this is being reused for all projects
export class TreasureHuntComponent implements OnInit {

  @Input() projectToShow: String = "treasure-hunt";
  @Output() toggleView = new EventEmitter<Boolean>();

  constructor() { 
    // Not needed for now
  }

  ngOnInit(): void {
  }

  close() {
    this.toggleView.emit(false);
  }

}
