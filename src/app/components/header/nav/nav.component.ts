import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavComponent implements OnInit {

  public constructor(private titleService: Title) { }

  // public setTitle( newTitle: string) {
  //   this.titleService.setTitle( newTitle );
  // }

  ngOnInit() {
  }

  changeBGtoBrown(event){
    document.getElementById("bgDiv").style.background = "#100c08";
    // document.getElementById("fig1").style.display = "none";
    // document.getElementById("fig2").style.display = "none";
    // document.getElementById("fig3").style.display = "none";
  }

}
