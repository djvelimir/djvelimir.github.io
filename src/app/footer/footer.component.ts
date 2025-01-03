import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Category } from '../models/category';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  categories: Category[] = [];

  constructor(private categoryService: CategoryService) {
    this.categoryService.getCategories().subscribe({
      next: (value) => (this.categories = value),
      error: (err) => console.error(err),
    });
  }
}
