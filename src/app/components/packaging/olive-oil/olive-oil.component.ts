import { Component, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-olive-oil',
  templateUrl: './olive-oil.component.html',
  styleUrls: ['./olive-oil.component.scss']
})
export class OliveOilComponent implements OnInit {

  album: Array<any> = [];

  constructor(private lightbox: Lightbox, private titleService: Title) { }

  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }

  ngOnInit() {
    const image = {
      src: 'assets/images/HO/Rhonea-HO-bouchon.png',
      caption: 'Huile d\'Olive Rhonéa',
      thumb: 'assets/images/HO/Rhonea-HO-bouchon.png'
   };

   const image2 = {
    src: 'assets/images/HO/SLP-HO-50.png',
    caption: 'Huile d\'Olive Saint Louis',
    thumb: 'assets/images/HO/SLP-HO-50.png'
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
