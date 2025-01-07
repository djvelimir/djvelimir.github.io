import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { Demo } from '../models/demo';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DemoService {
  constructor(private httpClient: HttpClient) {}

  getDemos(): Observable<Demo[]> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.httpClient
      .get<Demo[]>('/api/demos', { headers: headers })
      .pipe(shareReplay(1));
  }
}
