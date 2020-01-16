import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ADCreativ';

  private _opened: boolean = false;
  private _dock: boolean = false;
  private _closeOnClickOutside: boolean = true;
  private _closeOnClickBackdrop: boolean = true;
  private _showBackdrop: boolean = false;
  private _animate: boolean = true;
  private _trapFocus: boolean = true;
  private _autoFocus: boolean = true;
  private _keyClose: boolean = false;
  private _autoCollapseHeight: number = null;
  private _autoCollapseWidth: number = null;

  private _toggleOpened(): void {
    this._opened = !this._opened;
  }

  constructor(){
}

changeBGtoBrown(event){
  // document.getElementById("bgDiv").style.background = "#100c08";
  // document.getElementById("bgDiv").style.animationPlayState="paused";
  document.getElementById("fig1").style.display = "none";
    document.getElementById("fig2").style.display = "none";
    document.getElementById("fig3").style.display = "none";
}

}
