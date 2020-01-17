import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';


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

  constructor(private titleService: Title){
}

public setTitle(newTitle: string) {
  this.titleService.setTitle(newTitle);
}

changeBGtoBrown(event){
  document.getElementById("fig1").style.visibility = "hidden";
    document.getElementById("fig2").style.visibility = "hidden";
    document.getElementById("fig3").style.visibility = "hidden";
}

changeBGtoImage(event){
  document.getElementById("fig1").style.visibility = "visible";
    document.getElementById("fig2").style.visibility = "visible";
    document.getElementById("fig3").style.visibility = "visible";
}

}
