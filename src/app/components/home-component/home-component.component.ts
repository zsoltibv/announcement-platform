import { NotificationService } from './../../services/notification.service';
import { Component } from '@angular/core';
import { mergeMap } from "rxjs";
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
  breakpoint: number = 0;

  announcements: Announcement[] = [];
  filteredAnnouncements: Announcement[] = []

  notificationMessage: string = "";

  constructor(private announcementService: AnnouncementService,
    private notificationService: NotificationService) {
  }

  ngOnInit(): void {
    this.resizeRules(window.innerWidth);

    //signalr
    this.notificationService.initWebSocket();

    this.notificationService.notificationSubject.subscribe((hasNotifications) => {
      if (hasNotifications) {
        this.notificationMessage = "New notifications, please refresh the page";
        this.announcementService.getAnnouncements().subscribe((announcements: Announcement[]) => {
          this.announcements = announcements;
          this.filteredAnnouncements = announcements;
        });
      }
    });

    this.announcementService.getAnnouncements().subscribe((announcements: Announcement[]) => {
      this.announcements = announcements;
      this.filteredAnnouncements = announcements;
    });

    this.announcementService.subj.pipe(mergeMap(() => this.announcementService.getAnnouncements())).subscribe((announcements: Announcement[]) => {
      this.announcementService.getAnnouncements().subscribe((announcements: Announcement[]) => {
        this.announcements = announcements;
        this.filteredAnnouncements = announcements;
      });
    });
  }

  filterCategories(category: Category): void {

    this.filteredAnnouncements = [];

    if (category == undefined)
      this.filteredAnnouncements = this.announcements;
    else {
      this.announcements.forEach(element => {
        if (element.categoryId == category.id) {
          this.filteredAnnouncements.push(element);
        }
      });
    }
  }

  resizeRules(width: any): void {
    if (width <= 768) {
      this.breakpoint = 1;
    } else if (width <= 1200) {
      this.breakpoint = 2;
    } else {
      this.breakpoint = 3;
    }
  }

  onResize(event: any): void {
    this.resizeRules(event.target.innerWidth);
  }

  changeGridCols(cols: number): void {
    if (cols == 3) {
      this.resizeRules(window.innerWidth);
    }
    else {
      this.breakpoint = 1;
    }
  }
}
