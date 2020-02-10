import { Component, OnInit } from '@angular/core';
import { AgendaService } from 'src/app/agenda.service';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent implements OnInit {

  constructor(private agendaService: AgendaService) { }

  salons: any;
  ngOnInit() {
    this.list();
  }

  list(){
    this.agendaService.list().subscribe(
      (result: any) => this.salons = result
    )
  }

}
