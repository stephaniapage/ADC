import { Component, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-bottles',
  templateUrl: './bottles.component.html',
  styleUrls: ['./bottles.component.scss']
})
export class BottlesComponent implements OnInit {

  album: Array<any> = [];
  constructor(private lightbox: Lightbox, private titleService: Title) { 
  }

  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }

  ngOnInit() {
    const image = {
      src: 'assets/images/etiq/CSBR_AVENIR_RG-ecrase.jpg',
      caption: 'Seul l\'avenir m\'intéresse',
      thumb: 'assets/images/etiq/CSBR_AVENIR_RG-ecrase.jpg'
   };

   const image2 = {
    src: 'assets/images/etiq/CSBR_SALUT_TERRE_RG-ecrase.jpg',
    caption: 'Le salut de la Terre',
    thumb: 'assets/images/etiq/CSBR_SALUT_TERRE_RG-ecrase.jpg'
 };

 const image3 = {
  src: 'assets/images/etiq/jc_affranchis_rg.jpg',
  caption: 'L\'affranchi',
  thumb: 'assets/images/etiq/jc_affranchis_rg.jpg'
};

const image4 = {
  src: 'assets/images/etiq/jc_arnacoeur_rs.jpg',
  caption: 'L\'arnacoeur',
  thumb: 'assets/images/etiq/jc_arnacoeur_rs.jpg'
};

   this.album.push(image, image2, image3, image4);
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
