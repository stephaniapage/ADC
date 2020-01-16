import { Component, OnInit, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  constructor(private titleService: Title) { }

  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }

  ngOnInit() {
  }

  @Output() navClick = new EventEmitter();

  // changeBGtoImage(event){
  //   document.getElementById("bgDiv").style.background = "url('assets/images/EfferveSens_Les-bourdeaux.jpg')";
  //   document.getElementById("bgDiv").style.backgroundSize = "cover";
  // }

  changeBGtoBrown(event){
    // document.getElementById("bgDiv").style.background = "#100c08";
    // document.getElementById("fig1").style.display = "none";
    // document.getElementById("fig2").style.display = "none";
    // document.getElementById("fig3").style.display = "none";
    this.navClick.emit(event);
  }

}
