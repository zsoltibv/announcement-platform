import { AddAnnouncementFormComponent } from './../components/add-announcement-form/add-announcement-form.component';
import { Injectable } from '@angular/core';
import { Announcement } from "../models/announcement";
import { Category } from "../models/category";
import { Observable, Subject, of, throwError } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {
  baseURL: string = "https://localhost:7261/api/Announcement"
  subj = new Subject();


  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',

    }),
  };

  constructor(private http: HttpClient) { }

  getAnnouncement(id: string): Observable<Announcement> {
    return this.http.get<Announcement>(this.baseURL + '/' + id);
  }

  getAnnouncements(): Observable<Announcement[]> {
    return this.http.get<Announcement[]>(this.baseURL);
  }

  addAnnouncement(announcement: Announcement): Observable<any> {

    return this.http.post(
      this.baseURL,
      announcement,
      { headers: this.httpOptions.headers, 'responseType': "text" }
    );
  }

  deleteAnnouncement(id: number): Observable<any> {

    return this.http.delete(
      this.baseURL + '/' + id,
      { headers: this.httpOptions.headers, 'responseType': "text" }
    );
  }

  editAnnouncement(announcement: Announcement, id: number): Observable<any> {

    return this.http.put(
      this.baseURL + '/' + id,
      announcement,
      { headers: this.httpOptions.headers, 'responseType': "text" }
    );
  }
}
