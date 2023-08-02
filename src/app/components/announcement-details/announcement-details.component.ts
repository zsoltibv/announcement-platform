import { CategoryService } from 'src/app/services/category.service';
import { Category } from './../../models/category';
import { Announcement } from 'src/app/models/announcement';
import { AnnouncementService } from 'src/app/services/announcement.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-announcement-details',
  templateUrl: './announcement-details.component.html',
  styleUrls: ['./announcement-details.component.scss']
})
export class AnnouncementDetailsComponent {

  id: any = '';
  currentCategory: Category = {} as Category;

  announcement: Announcement = {
    id: 0,
    title: "",
    author: "",
    description: "",
    categoryId: ""
  };

  constructor(private route: ActivatedRoute, private announcementService: AnnouncementService,
    private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });

    this.announcementService.getAnnouncement(this.id).subscribe((announcement) => {
      this.announcement = announcement;
      this.categoryService.getCategory(this.announcement.categoryId).subscribe((category) => {
        this.currentCategory = category;
      });
    });

    console.log(this.currentCategory);
  }
}
