import { Announcement } from 'src/app/models/announcement';
import { Component } from '@angular/core';
import { Category } from "./models/category";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'notifications-app';

  category: Category = {
    id: 1,
    name: 'Test Category'
  }

  announcements: Announcement[] = [{
    title: 'Test Title',
    message: 'Test Message',
    author: 'Test Author',
    category: this.category
  },
  {
    title: 'Test Title2',
    message: 'Test Message2',
    author: 'Test Author2',
    category: this.category
  },
  {
    title: 'Test Title3',
    message: 'Test Message3',
    author: 'Test Author3',
    category: this.category
  },
  {
    title: 'Test Title4',
    message: 'Test Message4',
    author: 'Test Author4',
    category: this.category
  },];

  constructor() {
  }

  ngOnInit(): void {

  }
}
