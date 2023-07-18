import { Component, EventEmitter, Output } from '@angular/core';
import { Category } from "src/app/models/category";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {
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

  @Output() changeCategory = new EventEmitter<Category>();

  filterCategories(categoryId: number): void {
    this.changeCategory.emit(this.categories[categoryId - 1]);
  }
}
