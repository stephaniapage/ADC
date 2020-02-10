import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AgendaService } from '../agenda.service';
import { Salon } from '../salon';

@Component({
  selector: 'app-edit-salon',
  templateUrl: './edit-salon.component.html',
  styleUrls: ['./edit-salon.component.scss']
})
export class EditSalonComponent implements OnInit {

  salon: Salon;
  id: number;
  name: FormControl;
  place : FormControl;
  city: FormControl;
  date: FormControl;
  editForm:FormGroup;
  private success: Object;

  constructor(private agendaService: AgendaService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.agendaService.get(this.id);

    this.editForm = this.formBuilder.group({
      name: ['salon.name', [Validators.required]],
      place: ['salon.place', [Validators.required]],
      city: ['salon.city', [Validators.required]],
      date: ['salon.date', [Validators.required]]
    });
  }

  edit(){
    let salon:Salon = this.editForm.value as Salon;
    console.log(salon);
    this.agendaService.edit(salon.id, salon).subscribe(
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
