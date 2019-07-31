import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
 
@Injectable()
export class AppendToken implements HttpInterceptor {
 
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({headers: request.headers.set('Content-Type', 'application/json')});
    let token = localStorage.getItem('token');
    if (token) {
      request = request.clone({headers: request.headers.set('Authorization', `Bearer ${token}`)});
    }
    return next.handle(request);
 
  }
 
}