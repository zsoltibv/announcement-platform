import { Announcement } from 'src/app/models/announcement';
import { Component, EventEmitter } from '@angular/core';
import { Category } from "./models/category";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'notifications-app';

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

  announcements: Announcement[] = [{
    title: 'Test Title',
    message: 'Test Message',
    author: 'Test Author',
    category: this.categories[0]
  },
  {
    title: 'Test Title2',
    message: 'Test Message2',
    author: 'Test Author2',
    category: this.categories[1]
  },
  {
    title: 'Test Title3',
    message: 'Test Message3',
    author: 'Test Author3',
    category: this.categories[1]
  },
  {
    title: 'Test Title4',
    message: 'Test Message4',
    author: 'Test Author4',
    category: this.categories[2]
  },];

  filteredAnnouncements: Announcement[] = []

  constructor() {
    this.filteredAnnouncements = this.announcements;
  }

  ngOnInit(): void {

  }

  filterCategories(category: Category): void {

    this.filteredAnnouncements = [];

    if (category == undefined)
      this.filteredAnnouncements = this.announcements;
    else {
      this.announcements.forEach(element => {
        if (element.category.id == category.id) {
          this.filteredAnnouncements.push(element);
        }
      });
    }
  }
}
