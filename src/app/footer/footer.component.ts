import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  private dataService: DataService = inject(DataService);

  footerCategories = this.dataService.getFooterCategories();
}
