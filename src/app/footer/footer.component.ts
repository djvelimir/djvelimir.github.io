import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  categories = [
    {
      name: 'Frontend',
      items: [
        { name: 'Angular', url: 'https://github.com/djvelimir/demo-spa-angular' },
        { name: 'Vue', url: 'https://github.com/djvelimir/demo-spa-vue' },
        { name: 'React', url: 'https://github.com/djvelimir/demo-spa-react' },
        { name: 'Vite + React', url: 'https://github.com/djvelimir/demo-spa-react-vite' },
        { name: 'Blazor', url: 'https://github.com/djvelimir/demo-spa-blazor' },
        { name: 'Hugo', url: 'https://github.com/djvelimir/blog' },
      ]
    },
    {
      name: 'Java & Kotlin',
      items: [
        { name: 'Java - CLI', url: 'https://github.com/djvelimir/demo-java-cli' },
        { name: 'Java - Swing', url: 'https://github.com/djvelimir/demo-java-swing' },
        { name: 'Java - FX', url: 'https://github.com/djvelimir/demo-java-fx' },
        { name: 'Java - Spring Boot', url: 'https://github.com/djvelimir/demo-java-spring-boot' },
        { name: 'Kotlin - CLI', url: 'https://github.com/djvelimir/demo-kotlin-cli' },
      ]
    },
    {
      name: '.NET',
      items: [
        { name: 'C# .NET - CLI', url: 'https://github.com/djvelimir/demo-dotnet-cli' },
        { name: 'C# .NET - Benchmark', url: 'https://github.com/djvelimir/demo-dotnet-benchmark' },
        { name: 'C# .NET - WebApi', url: 'https://github.com/djvelimir/demo-dotnet-web-api' },
      ]
    },
    {
      name: 'Mobile',
      items: [
        { name: 'Android', url: 'https://github.com/djvelimir/demo-mobile-android' },
        { name: 'iOS', url: 'https://github.com/djvelimir/demo-mobile-ios' },
      ]
    },
    {
      name: 'Misc',
      items: [
        { name: 'Assembly', url: 'https://github.com/djvelimir/demo-assembly' },
        { name: 'C', url: 'https://github.com/djvelimir/demo-c' },
        { name: 'C++', url: 'https://github.com/djvelimir/demo-cpp-cli' },
        { name: 'Rust', url: 'https://github.com/djvelimir/demo-rust' },
        { name: 'Go (Golang)', url: 'https://github.com/djvelimir/demo-go' },
        { name: 'Python', url: 'https://github.com/djvelimir/demo-python-cli' },
        { name: 'Node.js', url: 'https://github.com/djvelimir/demo-node' },
        { name: 'Ruby', url: 'https://github.com/djvelimir/demo-ruby-quine' },
        { name: 'PHP', url: 'https://github.com/djvelimir/demo-php' },
      ]
    },
  ];
}
