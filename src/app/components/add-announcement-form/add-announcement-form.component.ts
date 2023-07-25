import { Announcement } from 'src/app/models/announcement';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Category } from "src/app/models/category";
import { Router } from "@angular/router";
import { AnnouncementService } from "src/app/services/announcement.service";
import { CategoryService } from "src/app/services/category.service";

@Component({
  selector: 'app-add-announcement-form',
  templateUrl: './add-announcement-form.component.html',
  styleUrls: ['./add-announcement-form.component.scss']
})
export class AddAnnouncementFormComponent {
  categories: Category[] = []

  constructor(private router: Router, private announcementService: AnnouncementService, private categoryService: CategoryService) {
    this.categoryService.getCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }

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
