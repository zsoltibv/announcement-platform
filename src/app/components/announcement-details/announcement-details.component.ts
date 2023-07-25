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

  announcement: Announcement = {
    id: 0,
    title: "",
    author: "",
    message: "",
    categoryId: "",
    imageURL: ""
  };

  constructor(private route: ActivatedRoute, private announcementService: AnnouncementService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });

    this.announcementService.getAnnouncement(this.id).subscribe((announcement) => {
      this.announcement = announcement;
    });
  }
}
