import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-treasure-hunt',
  templateUrl: './detail-card.html',
  styleUrls: ['./detail-card.css'],
})
export class DetailCard implements OnInit {
  @Input() projectToShow: String = 'treasure-hunt';
  @Output() toggleView = new EventEmitter<Boolean>();

  constructor() {
    // Not needed for now
  }

  ngOnInit(): void {}

  close() {
    this.toggleView.emit(false);
  }
}
