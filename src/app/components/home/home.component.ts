import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  currentYear = new Date().getFullYear();

  experience = this.currentYear - 2004;

  constructor() { }

  ngOnInit() {
  }

}
