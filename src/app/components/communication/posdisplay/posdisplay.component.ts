import { Component, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-posdisplay',
  templateUrl: './posdisplay.component.html',
  styleUrls: ['./posdisplay.component.scss']
})
export class POSDisplayComponent implements OnInit {
  
  album: Array<any> = [];

  constructor(private lightbox: Lightbox, private titleService: Title) { }

  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }

  ngOnInit() {

    const image = {
      src: 'assets/images/PLV/Kakemono-Terroir1.jpg',
      caption: 'Kakemono Terroir Daronton',
      thumb: 'assets/images/PLV/Kakemono-Terroir1.jpg'
   };

   const image2 = {
    src: 'assets/images/PLV/Castelbarry-general.png',
    caption: 'Affiche Castelbarry',
    thumb: 'assets/images/PLV/Castelbarry-general.png'
 };

 const image3 = {
  src: 'assets/images/PLV/Rhonea-Kakemono.png',
  caption: 'Kakemono Rhonéa',
  thumb: 'assets/images/PLV/Rhonea-Kakemono.png'
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
