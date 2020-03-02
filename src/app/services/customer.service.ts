import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  public saveCustomer(data, firm: File, photo: File){
    let formData: FormData = new FormData();
    formData.append('documentType', data.get('documentType').value);
    formData.append('documentNumber', data.get('documentNumber').value);
    formData.append('name', data.get('name').value);
    formData.append('lastName', data.get('lastName').value);
    formData.append('dateBirth', data.get('dateBirth').value);
    formData.append('maritalStatus', data.get('maritalStatus').value);
    formData.append('firm', firm);
    formData.append('photo', photo);
   
    return this.http.post(environment.restUri + '/saveCustomer', formData);
  }
}
