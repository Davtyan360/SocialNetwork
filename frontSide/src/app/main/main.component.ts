import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'micProj';
  paralacs(evnt) {
    let left = document.getElementById("left");
    let x = evnt.pageX / 40;
    let y = evnt.pageY / 50;
    left.style.backgroundPositionX = `calc(57% + ${x}px)`;
    left.style.backgroundPositionY = `calc(22% + ${y}px)`;
  }
}
