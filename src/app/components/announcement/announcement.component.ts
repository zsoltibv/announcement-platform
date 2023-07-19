import { Category } from './../../models/category';
import { Component, Input } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Announcement } from "src/app/models/announcement";

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss']
})
export class AnnouncementComponent {
  @Input() announcement!: Announcement;

  constructor() { }

  ngOnInit(): void {
  }
}
