import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/contact.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Contact } from 'src/app/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  prospect: any;
  email : FormControl;
  name: FormControl;
  subject: FormControl;
  message: FormControl;
  contactForm:FormGroup;
  private success: Object;

  constructor(private contactService: ContactService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
        name: ['', [Validators.required]],
        email: ['', [Validators.required]],
        subject: ['', [Validators.required]],
        message: ['', [Validators.required]]
      });
  }
  create(){
    let prospect:Contact = this.contactForm.value as Contact;
    console.log(prospect);
    this.contactService.create(prospect).subscribe(
      (result: Contact) => this.success = {
            id: result.id,
            name: prospect.name,
            email: prospect.email,
            subject: prospect.subject,
            message: prospect.message
      }
    );
  }
}
