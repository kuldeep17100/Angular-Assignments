import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEmployee } from './employee';
import { Observable, throwError } from 'rxjs';
import {catchError} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})

export class EmpService {
  private _url: string="/assets/data/employees1.json";

  constructor(private http:HttpClient) { }

  getEmp(): Observable<IEmployee[]>{

    return this.http.get<IEmployee[]>(this._url).pipe(
                      catchError(this.errorHandler));
                
  }

  errorHandler(error: HttpErrorResponse){
        return throwError(error.message || "Server Error");
  }

}
