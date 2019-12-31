import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  clients = [
    {name: "ALAIN CHABANON",
    logo: "assets/images/logos_clients/logo-chabanon.png",
    link: "https://www.alainchabanon.com/"},
    {name: "CASTELBARRY",
    logo: "assets/images/logos_clients/logo-castelbarry.jpg",
    link: "https://www.alainchabanon.com/"},
    {name: "CASTELMAURE",
    logo: "assets/images/logos_clients/logo-castelmaure.png",
    link: "https://www.alainchabanon.com/"},
    {name: "CAZES",
    logo: "assets/images/logos_clients/logo-chabanon.png",
    link: "https://www.alainchabanon.com/"},
    {name: "DOMAINE ROCHE",
    logo: "assets/images/logos_clients/logo-chabanon.png",
    link: "https://www.alainchabanon.com/"},
    {name: "HAUT LIROU",
    logo: "assets/images/logos_clients/logo-chabanon.png",
    link: "https://www.alainchabanon.com/"},
    {name: "JOSEPH CASTAN",
    logo: "assets/images/logos_clients/logo-chabanon.png",
    link: "https://www.alainchabanon.com/"},
    {name: "CHATEAU SAINT JEAN D’AUMIERES",
    logo: "assets/images/logos_clients/logo-chabanon.png",
    link: "https://www.alainchabanon.com/"},
    {name: "CHATEAU SAINT LOUIS LA PERDRIX",
    logo: "assets/images/logos_clients/logo-chabanon.png",
    link: "https://www.alainchabanon.com/"},
    {name: "JACQUES FRELIN",
    logo: "assets/images/logos_clients/logo-chabanon.png",
    link: "https://www.alainchabanon.com/"},
    {name: "VIGNERONS DE MARGUERITTES",
    logo: "assets/images/logos_clients/logo-chabanon.png",
    link: "https://www.alainchabanon.com/"},
    {name: "JEANJEAN",
    logo: "assets/images/logos_clients/logo-chabanon.png",
    link: "https://www.alainchabanon.com/"},
    {name: "MAS DE LAVAIL",
    logo: "assets/images/logos_clients/logo-chabanon.png",
    link: "https://www.alainchabanon.com/"},
    {name: "RHONEA",
    logo: "assets/images/logos_clients/logo-chabanon.png",
    link: "https://www.alainchabanon.com/"},
    {name: "VIGNOBLES TRAMIER",
    logo: "assets/images/logos_clients/logo-chabanon.png",
    link: "https://www.alainchabanon.com/"},
    {name: "SAVARY DE BEAUREGARD",
    logo: "assets/images/logos_clients/logo-chabanon.png",
    link: "https://www.alainchabanon.com/"}
  ];

  constructor() { }

  ngOnInit() {
  }

}
