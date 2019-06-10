import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Storage } from '@ionic/storage';
import { Consultoria } from './entities/consultoria';

const apiUrlOriginal:string = 'http://localhost:8080/rest/rest/consultoria';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private enderecoServidor:string = 'http://localhost:8080';
  private apiUrl:string = this.enderecoServidor+'/rest/rest/consultoria';

  constructor(private http: HttpClient, private storage: Storage) { 
        // busco o valor do endereço salvo no storage   
        storage.get('servidor').then((val) => {
          this.enderecoServidor = this.enderecoServidor === val ? this.enderecoServidor : val;
        });
  }

  getConsultorias (): Observable<Consultoria[]> {
    return this.http.get<Consultoria[]>(this.apiUrl+'/lista')
      .pipe(
        tap(consultorias => console.log('leu as consultorias ')),
        catchError(this.handleError('getConsultorias', []))
      );
  }

  getConsultoria(id: number): Observable<Consultoria> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Consultoria>(url).pipe(
      tap(_ => console.log(`leu o Consultoria id=${id}`)),
      catchError(this.handleError<Consultoria>(`getConsultoria id=${id}`))
    );
  }


  addConsultoria (consultoria): Observable<Consultoria> {
    return this.http.post<Consultoria>(this.apiUrl, Consultoria, httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap((consultoria: Consultoria) => console.log(`adicionou o Consultoria com w/ id=${consultoria.id}`)),
      catchError(this.handleError<Consultoria>('addConsultoria'))
    );
  }

  updateConsultoria(id, consultoria): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put(url, consultoria, httpOptions).pipe(
      tap(_ => console.log(`atualiza o produco com id=${id}`)),
      catchError(this.handleError<any>('updateConsultoria'))
    );
  }

  deleteConsultoria (id): Observable<Consultoria> {
    const url = `${this.apiUrl}/delete/${id}`;

    return this.http.delete<Consultoria>(url, httpOptions).pipe(
      tap(_ => console.log(`remove a Consultoria com id=${id}`)),
      catchError(this.handleError<Consultoria>('deleteConsultoria'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }
}
