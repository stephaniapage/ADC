import { Component, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cardboard-pack',
  templateUrl: './cardboard-pack.component.html',
  styleUrls: ['./cardboard-pack.component.scss']
})
export class CardboardPackComponent implements OnInit {

  album: Array<any> = [];

  constructor(private lightbox: Lightbox, private titleService: Title) { }

  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }

  ngOnInit() {
    const image = {
      src: 'assets/images/carton/carton-rhonea.png',
      caption: 'Carton Rhonéa',
      thumb: 'assets/images/carton/carton-rhonea.png'
   };

   const image2 = {
    src: 'assets/images/carton/carton-daronton.jpg',
    caption: 'Carton Daronton',
    thumb: 'assets/images/carton/carton-daronton.jpg'
 };

   this.album.push(image, image2);
  }

  open(index: number): void {
    // ouvre la lightbox
    this.lightbox.open(this.album, index);
  }
  
  close(): void {
    // ferme la lightbox
    this.lightbox.close();
  }
}
