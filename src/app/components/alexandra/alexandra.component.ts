import { Component, OnInit } from '@angular/core';
import { AgendaService } from 'src/app/agenda.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Salon } from 'src/app/salon';

@Component({
  selector: 'app-alexandra',
  templateUrl: './alexandra.component.html',
  styleUrls: ['./alexandra.component.scss']
})
export class AlexandraComponent implements OnInit {

  salon: Salon;
  name: FormControl;
  place : FormControl;
  city: FormControl;
  date: FormControl;
  createForm:FormGroup;
  private success: Object;

  constructor(private agendaService: AgendaService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      place: ['', [Validators.required]],
      city: ['', [Validators.required]],
      date: ['', [Validators.required]]
    });

    this.createForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      place: ['', [Validators.required]],
      city: ['', [Validators.required]],
      date: ['', [Validators.required]]
    });
  }

  create(){
    let salon:Salon = this.createForm.value as Salon;
    console.log(salon);
    this.agendaService.create(salon).subscribe(
      (result: Salon) =>
    this.success = {
      id: result.id,
      name: salon.name,
      place: salon.place,
      city: salon.city,
      date: salon.date

    }
    );

  }

}
