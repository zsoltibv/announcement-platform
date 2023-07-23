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
    id: new FormControl(this.announcementService.id++),
    title: new FormControl('', Validators.required),
    author: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
    category: new FormControl(this.categories[0].id, Validators.required),
  });

  onSubmit(): void {
    console.log(this.announcementForm.value);

    if (this.announcementForm.valid) {
      const newAnnouncement: Announcement = Object.assign({
        id: this.announcementForm.value.id,
        title: this.announcementForm.value.title,
        author: this.announcementForm.value.author,
        message: this.announcementForm.value.message,
        category: this.categories.find(x => x.id == this.announcementForm.value.category) as Category
      });
      this.announcementService.addAnnouncement(newAnnouncement);
      this.router.navigate(['/home']);
    }
  }
}
