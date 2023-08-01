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
    description: "",
    categoryId: ""
  };

  announcementForm = new FormGroup({
    id: new FormControl(),
    title: new FormControl('', Validators.required),
    author: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    categoryId: new FormControl('', Validators.required),
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
      description: this.announcement.description,
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
        description: this.announcementForm.value.description,
        categoryId: this.announcementForm.value.categoryId?.toString(),
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
