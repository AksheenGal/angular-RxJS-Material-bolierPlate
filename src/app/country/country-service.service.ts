import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
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

  getCountryDataForChart(): Observable<any> {
    const request1 = this.backend.getHttp('https://restcountries.eu' + '/rest/v2/name/Australia');
    const request2 = this.backend.getHttp('https://restcountries.eu' + '/rest/v2/name/germany');
    const request3 = this.backend.getHttp('https://restcountries.eu' + '/rest/v2/name/russia');
    const request4 = this.backend.getHttp('https://restcountries.eu' + '/rest/v2/name/spain');
    const request5 = this.backend.getHttp('https://restcountries.eu' + '/rest/v2/name/pakistan');
    return forkJoin([request1, request2, request3, request4, request5]);
  }
}
