import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'N3saaan';
  do : string;
  getvalue(selected : string){
    this.do = selected;

  }
}
