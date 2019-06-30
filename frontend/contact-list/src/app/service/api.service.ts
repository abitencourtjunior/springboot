import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Contact } from '../model/contact';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = 'http://localhost:8080/contatos';

@Injectable({
  providedIn: 'root'
})

export class Api {

  constructor(private http: HttpClient) { }

  getcontacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(apiUrl)
    .pipe(
      tap(contacts => console.log('Leu os Contatos')),
       catchError(this.handleError('getContatos', []))
    );
  }

  getcontact(id: number): Observable<Contact> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<Contact>(url).pipe(
      tap(_ => console.log(`leu o produto id=${id}`)),
      catchError(this.handleError<Contact>(`getProduto id=${id}`))
    );
  }


  addProduto(contact): Observable<Contact> {
    return this.http.post<Contact>(apiUrl, contact, httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap((contact: Contact) => console.log(`Adicionou o contato com w/ id=${contact.id}`)),
      catchError(this.handleError<Contact>('addcontact'))
    );
  }

  updatecontact(id, contact): Observable<any> {
  const url = `${apiUrl}/${id}`;
  return this.http.put(url, contact, httpOptions).pipe(
    tap(_ => console.log(`Atualiza o contato com id=${id}`)),
    catchError(this.handleError<any>('updatecontact'))
    );
  }

  deletecontact(id): Observable<Contact> {
    const url = `${apiUrl}/delete/${id}`;

    return this.http.delete<Contact>(url, httpOptions).pipe(
      tap(_ => console.log(`Remove o contato com id=${id}`)),
      catchError(this.handleError<Contact>('deletecontact'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }


}
