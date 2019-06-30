import { Component, OnInit } from '@angular/core';
import { Api } from '../service/api.service';
import { Contact } from '../model/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  displayedColumns: string[] = [ 'id', 'nome', 'email', 'telefone'];
  dataSource: Contact[];
  isLoadingResults = false;


  // tslint:disable-next-line:variable-name
  constructor(private _api: Api) { }

  ngOnInit() {
    this._api.getcontacts()
      .subscribe(resp => {
        this.dataSource = resp;
        console.log(this.dataSource);
        this.isLoadingResults = false;
      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }

}
