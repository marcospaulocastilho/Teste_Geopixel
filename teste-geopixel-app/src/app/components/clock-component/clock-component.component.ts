import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock-component',
  templateUrl: './clock-component.component.html',
  styleUrls: ['./clock-component.component.css']
})
export class ClockComponentComponent implements OnInit {

  horas = new Date().toLocaleTimeString();    
  constructor() { }

  ngOnInit(): void {
  }

}
