import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cvdto } from '../Modal/cvdto';

@Injectable({
  providedIn: 'root',
})
export class CVServiceService {
  url: string = 'https://localhost:44357/api/CV';
  constructor(private http: HttpClient) {}

  getAll(): Observable<Cvdto[]> {
    return this.http.get<Cvdto[]>(this.url);
  }
  get(id: number): Observable<Cvdto> {
    return this.http.get<Cvdto>(this.url + '/' + id);
  }
  post(dto: Cvdto): Observable<any> {
   return this.http.post(this.url, dto);
  }
  put(dto: Cvdto): Observable<any> {
   return this.http.put(this.url, dto);
  }
  delete(id: number): Observable<any> {
    return this.http.delete(this.url+ '/' + id);
  }
}
