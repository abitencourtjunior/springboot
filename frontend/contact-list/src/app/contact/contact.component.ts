import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact :  Contact = {
    id: 1,
    nome: 'teste',
    email: 'a@a.com.br',
    telefone:'1234'
  };

  constructor() { }

  ngOnInit() {
  }

}
