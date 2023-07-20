import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from "@angular/router";
import { AddAnnouncementFormComponent } from "./components/add-announcement-form/add-announcement-form.component";
import { RouterModule } from "@angular/router";
import { HomeComponentComponent } from "./components/home-component/home-component.component";
import { AnnouncementComponent } from "./components/announcement/announcement.component";
import { AnnouncementDetailsComponent } from "./components/announcement-details/announcement-details.component";
import { EditAnnouncementFormComponent } from "./components/edit-announcement-form/edit-announcement-form.component";

const routes: Routes = [
  { path: 'add', component: AddAnnouncementFormComponent },
  { path: '', component: HomeComponentComponent, pathMatch: 'full' },
  { path: 'announcement/:id', component: AnnouncementDetailsComponent, pathMatch: 'full' },
  { path: 'announcement/edit/:id', component: EditAnnouncementFormComponent, pathMatch: 'full' },
  { path: '**', component: HomeComponentComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})

export class AppRoutingModule {

}


