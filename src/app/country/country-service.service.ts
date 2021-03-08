import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BackendService } from '../core/backend.service';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private backend: BackendService) { }

  searchAllCountry(): Observable<any> {
    return this.backend.getHttp('https://restcountries.eu' + '/rest/v2/all')
  }

  getCountryData(input: string): Observable<any> {
    return this.backend.getHttp('https://restcountries.eu' + '/rest/v2/name/' + input);
  }
}
