import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Category } from "../models/category";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  baseURL: string = "https://localhost:7261/api/Categories"

  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.baseURL);
  }

  getCategory(id: string): Observable<Category> {
    return this.http.get<Category>(this.baseURL + '/' + id);
  }
}
