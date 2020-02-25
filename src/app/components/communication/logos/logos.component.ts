import { Component, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-logos',
  templateUrl: './logos.component.html',
  styleUrls: ['./logos.component.scss']
})
export class LogosComponent implements OnInit {

  album: Array<any> = [];

  constructor(private lightbox: Lightbox, private titleService: Title) { }

  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }

  ngOnInit() {
    const image = {
      src: 'assets/images/LOGOS/Logo-Pams.png',
      caption: 'Logo Mas Le Pam\'s',
      thumb: 'assets/images/LOGOS/Logo-Pams.png'
   };

   const image2 = {
    src: 'assets/images/LOGOS/Logo-SJA.png',
    caption: 'Logo Saint-Jean d\'Aumières',
    thumb: 'assets/images/LOGOS/Logo-SJA.png'
 };

 const image3 = {
  src: 'assets/images/LOGOS/Logo-Emile-Rose.png',
  caption: 'Logo du domaine Emile et Rose',
  thumb: 'assets/images/LOGOS/Logo-Emile-Rose.png'
};

const image4 = {
  src: 'assets/images/LOGOS/Logo-Roche.png',
  caption: 'Logo du domaine Roche',
  thumb: 'assets/images/LOGOS/Logo-Roche.png'
};

this.album.push(image, image2, image3, image4);
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
