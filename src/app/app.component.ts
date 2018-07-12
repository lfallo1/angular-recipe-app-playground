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
  mod: number = 0;

  generateRandomNumber(): void{
    this.mod = Math.floor(Math.random() * 10000) % 5;
  }

  modeChanged(mode){
    this.mode = mode;
  }
}
