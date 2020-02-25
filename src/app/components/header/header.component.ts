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
  @Output() logoClick = new EventEmitter();

  changeBGtoImage(event){
    this.logoClick.emit(event);
  }

  changeBGtoBrown(event){
    this.navClick.emit(event);
  }

  
}
