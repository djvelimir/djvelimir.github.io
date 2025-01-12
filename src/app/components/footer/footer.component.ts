import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Category } from '@models/category';
import { CategoryService } from '@services/category/category.service';
import { LogoComponent } from '@components/logo/logo.component';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, LogoComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  currentYear: number;
  categories: Category[] = [];

  constructor(private categoryService: CategoryService) {
    this.currentYear = new Date().getFullYear();
    this.categoryService.getCategories().subscribe({
      next: (value) => (this.categories = value),
      error: (err) => console.error(err),
    });
  }
}
