import { Component, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-boxes',
  templateUrl: './boxes.component.html',
  styleUrls: ['./boxes.component.scss']
})
export class BoxesComponent implements OnInit {

  album: Array<any> = [];
  constructor(private lightbox: Lightbox, private titleService: Title) { }

  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }

  ngOnInit() {
    const image = {
      src: 'assets/images/bib/col_du_vent_bib.png',
      caption: 'Col du Vent',
      thumb: 'assets/images/bib/col_du_vent_bib.png'
   };

   const image2 = {
    src: 'assets/images/bib/castecubi10rg_.png',
    caption: 'Castelcubi',
    thumb: 'assets/images/bib/castecubi10rg_.png'
 };

 const image3 = {
  src: 'assets/images/bib/Castelbarry-BIB-3L-Les-Coopains.png',
  caption: 'Les Coopains',
  thumb: 'assets/images/bib/Castelbarry-BIB-3L-Les-Coopains.png'
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
