import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
  HttpHeaders,
} from '@angular/common/http';
import { catchError, finalize } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { AppService } from './app.service';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  constructor(
    private http: HttpClient,
    private appService: AppService
  ) {}
  getHttp<T>(
    url: string,
    params: {} = {},
    showSpinner: boolean = true,
    customErrorHanler?: () => any
  ): any {
    const httpParams = new HttpParams({
      fromObject: params,
    });
    this.changeSpinner(showSpinner, true);
    return this.http
      .get<T>(url, {
        params: httpParams,
      })
      .pipe(
        catchError(customErrorHanler ? customErrorHanler : this.handleError)
      )
      .pipe(
        finalize(() => {
          this.changeSpinner(showSpinner, false);
        })
      );
  }

  postHttpPermission<T>(
    url: string,
    body: any,
    params: {} = {},
    showSpinner: boolean = true,
    customErrorHanler?: () => any
  ): any {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + body,
      }),
    };
    this.changeSpinner(showSpinner, true);

    return this.http
      .get<T>(url, httpOptions)
      .pipe(
        catchError(customErrorHanler ? customErrorHanler : this.handleError)
      )
      .pipe(
        finalize(() => {
          this.changeSpinner(showSpinner, false);
        })
      );
  }

  postHttpLogin<T>(
    url: string,
    body: any,
    showSpinner: boolean = true,
    customErrorHanler?: () => any
  ): any {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods':
          'GET, POST, PATCH, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
        'Access-Control-Allow-Credentials': 'true',
        Authorization: 'Basic ' + btoa('devglan-client:devglan-secret'),
      }),
    };

    body =
      'grant_type=password&username=' +
      body.username +
      '&password=' +
      body.password;

    this.changeSpinner(showSpinner, true);
    return this.http
      .post<T>(url, body, httpOptions)
      .pipe(
        catchError(customErrorHanler ? customErrorHanler : this.handleError)
      )
      .pipe(
        finalize(() => {
          this.changeSpinner(showSpinner, false);
        })
      );
  }

  postHttp<T>(
    url: string,
    body: any,
    showSpinner: boolean = true,
    customErrorHanler?: () => any
  ): any {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'my-auth-token',
      }),
    };

    this.changeSpinner(showSpinner, true);
    return this.http
      .post<T>(url, body, httpOptions)
      .pipe(
        catchError(customErrorHanler ? customErrorHanler : this.handleError)
      )
      .pipe(
        finalize(() => {
          this.changeSpinner(showSpinner, false);
        })
      );
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError(error.error.message);
  }

  private changeSpinner(useLoader: boolean, show: boolean) {
    if (useLoader) {
      this.appService.changeSpinner(show);
    }
  }
}
