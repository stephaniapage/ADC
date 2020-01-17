import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  // L'objet Date récupère l'année en cours et est stocké dans la variable "currentYear":
  
  currentYear = new Date().getFullYear();

  constructor() { }

  ngOnInit() {
    
  }

}
