import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AgendaService } from '../agenda.service';
import { Salon } from '../salon';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-edit-salon',
  templateUrl: './edit-salon.component.html',
  styleUrls: ['./edit-salon.component.scss']
})
export class EditSalonComponent implements OnInit {

  constructor(private datePipe : DatePipe , private agendaService: AgendaService, private formBuilder: FormBuilder, private router: Router, private route : ActivatedRoute) { }

  salon: Salon;
  id: number;
  name: FormControl;
  place : FormControl;
  city: FormControl;
  date: FormControl;
  editForm:FormGroup;
  private success: Object;
  
  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.agendaService.get(this.id).subscribe(
      (result: Salon) => {
        this.salon = result
        this.editForm = this.formBuilder.group({
          name: [this.salon.name, [Validators.required]],
          place: [this.salon.place, [Validators.required]],
          city: [this.salon.city, [Validators.required]],
          date: [this.datePipe.transform(this.salon.date, "yyyy-MM-dd"), [Validators.required]]
        });
      } 
    );

  }

  edit(){
    let salon:Salon = this.editForm.value as Salon;
    console.log(salon);
    this.agendaService.edit(this.id, salon).subscribe(
      (result: Salon) =>
    this.success = {
      id: result.id,
      name: salon.name,
      place: salon.place,
      city: salon.city,
      date: salon.date
    }
    );
    this.router.navigate(['alexandra']);
  }

}
