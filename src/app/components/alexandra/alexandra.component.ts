import { Component, OnInit } from '@angular/core';
import { AgendaService } from 'src/app/agenda.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Salon } from 'src/app/salon';
import { AuthService } from 'src/app/services/auth.service';

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
  private create_success: Object;
  private delete_success: Object;

  constructor(private agendaService: AgendaService, private formBuilder: FormBuilder, authService: AuthService) { }
  
  salons: any;
  ngOnInit() {
    this.createForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      place: ['', [Validators.required]],
      city: ['', [Validators.required]],
      date: ['', [Validators.required]]
    });
    this.list();
  }

  create(){
    let salon:Salon = this.createForm.value as Salon;
    console.log(salon);
    this.agendaService.create(salon).subscribe(
      (result: Salon) =>
    this.create_success = {
      id: result.id,
      name: salon.name,
      place: salon.place,
      city: salon.city,
      date: salon.date
    }
    );

  }

  delete(){
    
    if (confirm("Êtes-vous sûre de vouloir supprimer ce salon?")) {
      let salon:Salon;
      this.agendaService.delete(salon.id).subscribe(
        (result: Salon) =>
          this.delete_success = {
              id: result.id,
              name: salon.name,
              place: salon.place,
              city: salon.city,
              date: salon.date
          });
    }
  }

  list(){
    this.agendaService.list().subscribe(
      (result: any) => this.salons = result
    )
  }

}
