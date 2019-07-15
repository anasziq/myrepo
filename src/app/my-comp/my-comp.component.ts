import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-my-comp',
  templateUrl: './my-comp.component.html',
  styleUrls: ['./my-comp.component.scss']
})
export class MyCompComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  @Input() t:string;
  @Output() clc = new EventEmitter<string>();
  
  performe(){
    this.clc.emit('my chled clc');
  }
}
