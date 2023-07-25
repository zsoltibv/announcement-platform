import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnnouncementComponent } from './components/announcement/announcement.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { CategoriesComponent } from './components/categories/categories.component';
import { MatSelectModule } from '@angular/material/select';
import { NameFormatPipe } from './pipes/name-format.pipe';
import { AddAnnouncementFormComponent } from './components/add-announcement-form/add-announcement-form.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AnnouncementDetailsComponent } from './components/announcement-details/announcement-details.component';
import { EditAnnouncementFormComponent } from './components/edit-announcement-form/edit-announcement-form.component';
import { HttpClient, HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    AnnouncementComponent,
    CategoriesComponent,
    NameFormatPipe,
    AddAnnouncementFormComponent,
    HomeComponentComponent,
    NavbarComponent,
    AnnouncementDetailsComponent,
    EditAnnouncementFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatSelectModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatToolbarModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
