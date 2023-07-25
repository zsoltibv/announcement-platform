import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Route, Router } from "@angular/router";
import { Announcement } from "src/app/models/announcement";
import { Category } from "src/app/models/category";
import { AnnouncementService } from "src/app/services/announcement.service";
import { CategoryService } from "src/app/services/category.service";

@Component({
  selector: 'app-edit-announcement-form',
  templateUrl: './edit-announcement-form.component.html',
  styleUrls: ['./edit-announcement-form.component.scss']
})
export class EditAnnouncementFormComponent {

  id: any = '';

  announcement: Announcement = {
    id: 0,
    title: "",
    author: "",
    message: "",
    categoryId: "",
    imageURL: ""
  };

  announcementForm = new FormGroup({
    id: new FormControl(),
    title: new FormControl('', Validators.required),
    author: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
    categoryId: new FormControl('', Validators.required),
    imageURL: new FormControl('')
  });

  categories: Category[] = []

  constructor(private router: Router, private route: ActivatedRoute, private announcementService: AnnouncementService,
    private categoryService: CategoryService) {
    this.categoryService.getCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });

    this.announcementService.getAnnouncement(this.id).subscribe((announcement) => {
      this.announcement = announcement;
      this.fillFormWithEditData();
    });
  }

  fillFormWithEditData(): void {

    this.announcementForm.patchValue({
      id: this.announcement.id,
      title: this.announcement.title,
      author: this.announcement.author,
      message: this.announcement.message,
      categoryId: this.announcement.categoryId.toString()
    });

    console.log(this.announcementForm.value);
  }

  onSubmit(): void {
    if (this.announcementForm.valid) {
      const editAnnouncement: Announcement = Object.assign({
        id: this.announcementForm.value.id,
        title: this.announcementForm.value.title,
        author: this.announcementForm.value.author,
        message: this.announcementForm.value.message,
        categoryId: this.announcementForm.value.categoryId?.toString(),
        imageURL: this.announcementForm.value.imageURL
      });
      console.log(editAnnouncement)
      this.announcementService.editAnnouncement(editAnnouncement, this.id).subscribe(
        () => {
          this.router.navigate(['/']);
        }
      );
    }
  }
}
