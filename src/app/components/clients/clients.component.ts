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
    link: "https://montpeyroux.org/"},

    {name: "CASTELMAURE",
    logo: "assets/images/logos_clients/logo-castelmaure.png",
    link: "http://www.castelmaure.com/"},

    {name: "CAZES",
    logo: "assets/images/logos_clients/logo-cazes.png",
    link: "https://www.cazes-rivesaltes.com/"},

    {name: "DOMAINE ROCHE",
    logo: "assets/images/logos_clients/domaine-roche.png",
    link: "http://www.domaineroche.fr/index.php/fr/"},

    {name: "HAUT LIROU",
    logo: "assets/images/logos_clients/lirou-logo.jpg",
    link: "https://www.facebook.com/hautlirou/"},

    {name: "JOSEPH CASTAN",
    logo: "assets/images/logos_clients/jcs-logo.jpg",
    link: "https://josephcastan.com/"},

    {name: "CHATEAU SAINT JEAN D’AUMIERES",
    logo: "assets/images/logos_clients/sjd-logo.jpg",
    link: "https://saintjeandaumieres.com/"},

    {name: "CHATEAU SAINT LOUIS LA PERDRIX",
    logo: "assets/images/logos_clients/slp-logo.jpg",
    link: "https://saintlouislaperdrix.com/"},

    {name: "JACQUES FRELIN",
    logo: "assets/images/logos_clients/logo-frelin.jpg",
    link: "http://jacquesfrelin.com/fr/"},

    {name: "VIGNERONS DE MARGUERITTES",
    logo: "assets/images/logos_clients/marguerittes.png",
    link: "https://www.facebook.com/pg/cave.marguerittes/about/?ref=page_internal"},

    {name: "JEANJEAN",
    logo: "assets/images/logos_clients/jeanjean.png",
    link: "https://www.vignobles-jeanjean.com/"},

    {name: "MAS DE LAVAIL",
    logo: "assets/images/logos_clients/logo-lavail.png",
    link: "http://www.masdelavail.com/"},

    {name: "RHONEA",
    logo: "assets/images/logos_clients/rhonea.jpg",
    link: "https://www.rhonea.fr/"},

    {name: "VIGNOBLES TRAMIER",
    logo: "assets/images/logos_clients/logo-lucien-tramier.png",
    link: "https://www.lucientramier.fr/"},

    {name: "SAVARY DE BEAUREGARD",
    logo: "assets/images/logos_clients/beauregardlogo.png",
    link: "http://www.savarydebeauregard.com/index.php/fr/"}
  ];

  constructor() { }

  ngOnInit() {
  }

}
