import { Component, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-leaflets',
  templateUrl: './leaflets.component.html',
  styleUrls: ['./leaflets.component.scss']
})
export class LeafletsComponent implements OnInit {

  album: Array<any> = [];

  constructor(private lightbox: Lightbox, private titleService: Title) { }

  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }

  ngOnInit() {
    const image = {
      src: 'assets/images/plaquette/Plaquette-AChabanon.jpg',
      caption: 'Plaquette Alain Chabanon',
      thumb: 'assets/images/plaquette/Plaquette-AChabanon_thumb.jpg'
   };
    const image2 = {
      src: 'assets/images/plaquette/Brochure-Savary.jpg',
      caption: 'Plaquette Savary de Beauregard - recto',
      thumb: 'assets/images/plaquette/Brochure-Savary.jpg'
   };

   const image3 = {
    src: 'assets/images/plaquette/Brochure-Savary-verso.jpg',
    caption: 'Plaquette Savary de Beauregard - verso',
    thumb: 'assets/images/plaquette/Brochure-Savary-verso.jpg'
 };

   this.album.push(image, image2, image3);
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
