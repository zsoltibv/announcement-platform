import { Announcement } from 'src/app/models/announcement';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Category } from "src/app/models/category";
import { Router } from "@angular/router";
import { AnnouncementService } from "src/app/services/announcement.service";

@Component({
  selector: 'app-add-announcement-form',
  templateUrl: './add-announcement-form.component.html',
  styleUrls: ['./add-announcement-form.component.scss']
})
export class AddAnnouncementFormComponent {
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

  constructor(private router: Router, private announcementService: AnnouncementService) { }

  announcementForm = new FormGroup({
    title: new FormControl('', Validators.required),
    author: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
    categoryId: new FormControl('', Validators.required),
    imageURL: new FormControl('')
  });

  onSubmit(): void {

    if (this.announcementForm.valid) {
      const newAnnouncement: Announcement = Object.assign({
        title: this.announcementForm.value.title,
        author: this.announcementForm.value.author,
        message: this.announcementForm.value.message,
        categoryId: this.announcementForm.value.categoryId?.toString(),
        imageURL: this.announcementForm.value.imageURL
      });
      this.announcementService.addAnnouncement(newAnnouncement).subscribe(
        () => {
          this.router.navigate(['/']);
        }
      );
    }
  }
}
