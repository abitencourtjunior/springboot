import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators, ReactiveFormsModule } from '@angular/forms';
import { Api } from '../service/api.service';

@Component({
  selector: 'app-contact-new',
  templateUrl: './contact-new.component.html',
  styleUrls: ['./contact-new.component.css']
})
export class ContactNewComponent implements OnInit {

  contactForm: FormGroup;
  isLoadingResults = false;

  constructor(private router: Router, private api: Api, private formBuilder : FormBuilder) { }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      'nome_contato' : [null, Validators.required],
      'email_contato' : [null, Validators.required],
      'telefone_contato' : [null, Validators.required]
    });
  }

  addContact(form:NgForm) {
    this.isLoadingResults = true;
    this.api.addContact(form)
      .subscribe(res => {
          const id = res['_id'];
          this.isLoadingResults = false;
          this.router.navigate(['/contact-detail', id]);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        });
  }

}
