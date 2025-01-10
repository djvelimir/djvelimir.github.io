import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { Category } from '@models/category';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private httpClient: HttpClient) {}

  getCategories(): Observable<Category[]> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.httpClient
      .get<Category[]>('/api/categories', {
        headers: headers,
      })
      .pipe(shareReplay(1));
  }
}
