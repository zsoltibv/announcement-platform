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
  currentCategory: Category = {} as Category;

  constructor(private categoryService: CategoryService) {
    this.categoryService.getCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }

  ngOnInit(): void {

  }

  @Output() changeCategory = new EventEmitter<Category>();

  filterCategories(categoryId: string): void {
    this.categoryService.getCategory(categoryId).subscribe((category) => {
      this.changeCategory.emit(category);
    });
  }

  resetCategories(categoryId: string): void {
      this.changeCategory.emit(undefined);
  }
}
