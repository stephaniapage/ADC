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

    //On récupère le paramètre id de l'URL en prenant une "photo" de celle-ci
    this.id = this.route.snapshot.params.id;

    //on s'abonne à la méthode get du service Agenda en lui passant l'id comme paramètre
    this.agendaService.get(this.id).subscribe(

      //le résultat obtenu est une instance du modèle Salon
      (result: Salon) => {
        //On stocke ce résultat dans la variable salon déclarée plus haut
        this.salon = result

        //On crée un formulaire d'édition en présentant les données récupérées dans les champs
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

    //on récupère les valeurs saisies dans le formulaire d'édition et on les stocke dans la variable salon
    let salon:Salon = this.editForm.value as Salon;
    console.log(salon);

    //on appelle le service agenda pour envoyer la requête d'édition
    this.agendaService.edit(this.id, salon).subscribe(

      //Avec le résultat de la requête PUT effectuée fourni par l'API, 
      //on stocke les informations du salon modifiées dans un objet Succès
      (result: Salon) =>
          this.success = {
              id: result.id,
              name: salon.name,
              place: salon.place,
              city: salon.city,
              date: salon.date
          });
          //Pour terminer, on redirige vers la page admin "Alexandra"
    this.router.navigate(['alexandra']);
  }

}
