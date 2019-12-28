import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  changeBGtoImage(event){
    document.getElementById("bgDiv").style.background = "url('assets/images/EfferveSens_Les-bourdeaux.jpg')";
    document.getElementById("bgDiv").style.backgroundSize = "cover";
  }

}
