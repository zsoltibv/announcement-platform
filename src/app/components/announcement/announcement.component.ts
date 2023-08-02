import { NotificationService } from './../../services/notification.service';
import { Category } from './../../models/category';
import { Component, Input } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Announcement } from "src/app/models/announcement";
import { AnnouncementService } from "src/app/services/announcement.service";
import { CategoryService } from "src/app/services/category.service";

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss']
})
export class AnnouncementComponent {
  @Input() announcement!: Announcement;

  categories: Category[] = []
  currentCategory: Category = {} as Category;

  constructor(private announcementService: AnnouncementService,
    private categoryService: CategoryService, private notificationService: NotificationService) {
  }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((categories) => {
      this.categories = categories;
    });

    this.categoryService.getCategory(this.announcement.categoryId).subscribe((category) => {
      this.currentCategory = category;
    });
  }

  deleteAnnouncement(): void {
    console.log(this.announcement.id);
    this.announcementService.deleteAnnouncement(this.announcement.id).subscribe(
      () => {
        this.notificationService.sendMessage("BroadcastMessage", [this.announcement]);
        this.announcementService.subj.next("");
      }
    );
  }
}
