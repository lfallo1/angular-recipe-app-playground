import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output('onModeChanged') modeChanged = new EventEmitter<string>();
  @Input() page: string;

  changeMode(mode: string) {
    this.modeChanged.emit(mode);
  }
}
