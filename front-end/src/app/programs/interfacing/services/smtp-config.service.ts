import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SmtpConfigModel } from '../models/smtp-config.model';

@Injectable({
  providedIn: 'root'
})
export class SmtpConfigService {

  baseSmtpConfigUrl: string = environment.baseSmtpConfigApiUrl;

  constructor(private http: HttpClient) { }
  getSmtpConfigList(): Observable<SmtpConfigModel[]> {
    return this.http.get<SmtpConfigModel[]>(this.baseSmtpConfigUrl + '/smtpConfig');
  }

  // addEmployee(addEmployeeRequest: Employee): Observable<Employee>{
  //   addEmployeeRequest.id = '00000000-0000-0000-0000-000000000000';
  //   return this.http.post<Employee>(this.baseSmtpConfigUrl + '/smtp', addEmployeeRequest);
  // }
}
