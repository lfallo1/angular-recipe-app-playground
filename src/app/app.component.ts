import {AfterViewInit, Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {
  title = 'App Demo Title';
  mode = 'recipe';
  hideMe: boolean = false;

  modeChanged(mode){
    this.mode = mode;
  }
}
