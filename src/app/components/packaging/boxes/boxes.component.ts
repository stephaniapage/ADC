import { Component, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-boxes',
  templateUrl: './boxes.component.html',
  styleUrls: ['./boxes.component.scss']
})
export class BoxesComponent implements OnInit {

  album: Array<any> = [];
  constructor(private lightbox: Lightbox) { }

  ngOnInit() {
    const image = {
      src: 'assets/images/bib/castecubi10rg_.png',
      caption: 'Castelcubi',
      thumb: 'assets/images/bib/castecubi10rg_.png'
   };

   const image2 = {
    src: 'assets/images/bib/Castelbarry-BIB-3L-Les-Coopains.png',
    caption: 'Les Coopains',
    thumb: 'assets/images/bib/Castelbarry-BIB-3L-Les-Coopains.png'
 };

   this.album.push(image, image2);
  }

  open(index: number): void {
    // open lightbox
    this.lightbox.open(this.album, index);
  }
  
  close(): void {
    // close lightbox programmatically
    this.lightbox.close();
  }
}
