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
  baseURL: string = "https://newsapi20221108120432.azurewebsites.net/api/Announcements"
  subj = new Subject();


  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(private http: HttpClient) { }

  getAnnouncement(id: string): Observable<Announcement> {
    return this.http.get<Announcement>(this.baseURL + '/' + id);
  }

  getAnnouncements(): Observable<Announcement[]> {
    return this.http.get<Announcement[]>(this.baseURL);
  }

  addAnnouncement(announcement: Announcement): Observable<Announcement> {

    return this.http.post<Announcement>(
      this.baseURL,
      announcement,
      { headers: this.httpOptions.headers }
    );
  }

  deleteAnnouncement(id: number): Observable<Announcement> {

    return this.http.delete<Announcement>(
      this.baseURL + '/' + id,
      { headers: this.httpOptions.headers }
    );
  }

  editAnnouncement(announcement: Announcement, id: number): Observable<Announcement> {

    return this.http.put<Announcement>(
      this.baseURL + '/' + id,
      announcement,
      { headers: this.httpOptions.headers }
    );
  }
}
