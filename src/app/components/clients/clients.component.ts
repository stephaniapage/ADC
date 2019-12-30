import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  clients = [
    {name: "ALAIN CHABANON"},
    {name: "CASTELBARRY"},
    {name: "CASTELMAURE"},
    {name: "CAZES"},
    {name: "DOMAINE ROCHE"},
    {name: "HAUT LIROU"},
    {name: "JOSEPH CASTAN"},
    {name: "CHATEAU SAINT JEAN D’AUMIERES"},
    {name: "CHATEAU SAINT LOUIS LA PERDRIX"},
    {name: "JACQUES FRELIN"},
    {name: "VIGNERONS DE MARGUERITTES"},
    {name: "JEANJEAN"},
    {name: "MAS DE LAVAIL"},
    {name: "RHONEA"},
    {name: "VIGNOBLES TRAMIER"},
    {name: "SAVARY DE BEAUREGARD"}
  ];

  constructor() { }

  ngOnInit() {
  }

}
