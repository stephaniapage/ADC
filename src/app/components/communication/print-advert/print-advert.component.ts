import { Component, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-print-advert',
  templateUrl: './print-advert.component.html',
  styleUrls: ['./print-advert.component.scss']
})
export class PrintAdvertComponent implements OnInit {
  
  album: Array<any> = [];

  constructor(private lightbox: Lightbox, private titleService: Title) { }

  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }

  ngOnInit() {
    const image = {
      src: 'assets/images/PUB/Facebook-Castelbarry.jpg',
      caption: 'Publicité Facebook Castelbarry',
      thumb: 'assets/images/PUB/Facebook-Castelbarry.jpg'
   };

   const image2 = {
    src: 'assets/images/PUB/quartpage.png',
    caption: 'Quart de page M.A Silva',
    thumb: 'assets/images/PUB/quartpage.png'
 };

 const image3 = {
  src: 'assets/images/PUB/Banniere-BIODIS-aout 2019.png',
  caption: 'Bannière Biodis Jacques Frelin',
  thumb: 'assets/images/PUB/Banniere-BIODIS-aout 2019_thumb.png'
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
