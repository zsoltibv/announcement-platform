import { AddAnnouncementFormComponent } from './../components/add-announcement-form/add-announcement-form.component';
import { Injectable } from '@angular/core';
import { Announcement } from "../models/announcement";
import { Category } from "../models/category";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {

  categories: Category[] = [{
    id: 1,
    name: 'Course'
  }, {
    id: 2,
    name: 'General'
  }, {
    id: 3,
    name: 'Laboratory'
  }]

  announcements: Announcement[] = [
    {
      id: 1,
      title: 'Test Title',
      message: 'Test Message',
      author: 'Test Author',
      category: this.categories[0]
    },
    {
      id: 2,
      title: 'Test Title2',
      message: 'Test Message2',
      author: 'Test Author2',
      category: this.categories[1]
    },
    {
      id: 3,
      title: 'Test Title3',
      message: 'Test Message3',
      author: 'Test Author3',
      category: this.categories[1]
    },
    {
      id: 4,
      title: 'Test Title4',
      message: 'Test Message4',
      author: 'Test Author4',
      category: this.categories[2]
    },
  ];

  id: number = this.announcements.length + 1;

  constructor() { }

  ngOnInit(): void {
  }

  getAnnouncements(): Observable<Announcement[]> {
    return of(this.announcements);
  }

  addAnnouncement(announcement: Announcement): void {
    this.announcements.push(announcement);
  }

  deleteAnnouncement(id: number): void {
    this.announcements.forEach((element, index) => {
      if (element.id == id) {
        this.announcements.splice(index, 1);
      }
    });
  }
}
