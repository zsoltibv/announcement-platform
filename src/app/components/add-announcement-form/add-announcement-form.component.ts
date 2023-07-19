import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Category } from "src/app/models/category";
import {Router} from "@angular/router";

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

  constructor(private router: Router){}

  announcementForm = new FormGroup({
    title: new FormControl('', Validators.required),
    author: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
  });

  onSubmit(): void {
    console.log(this.announcementForm.value);
    this.router.navigate(['/home']);
  }
}
