import { Component } from '@angular/core';
import { Announcement } from "src/app/models/announcement";
import { Category } from "src/app/models/category";
import { AnnouncementService } from "src/app/services/announcement.service";

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss']
})
export class HomeComponentComponent {
  title = 'notifications-app';

  announcements: Announcement[] = [];
  filteredAnnouncements: Announcement[] = []

  constructor(private announcementService: AnnouncementService) {
  }

  ngOnInit(): void {
    this.announcementService.getAnnouncements().subscribe((announcements: Announcement[]) => {
      this.announcements = announcements;
      this.filteredAnnouncements = announcements;
    });
  }

  filterCategories(category: Category): void {

    this.filteredAnnouncements = [];

    if (category == undefined)
      this.filteredAnnouncements = this.announcements;
    else {
      this.announcements.forEach(element => {
        if (element.categoryId == category.id.toString()) {
          this.filteredAnnouncements.push(element);
        }
      });
    }
  }
}
