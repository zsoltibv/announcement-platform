import { Component, EventEmitter, Output } from '@angular/core';
import { Category } from "src/app/models/category";
import { CategoryService } from "src/app/services/category.service";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {
  categories: Category[] = [];

  constructor(private categoryService: CategoryService) {
    this.categoryService.getCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }

  @Output() changeCategory = new EventEmitter<Category>();

  filterCategories(categoryId: number): void {
    this.changeCategory.emit(this.categories[categoryId - 1]);
  }
}
