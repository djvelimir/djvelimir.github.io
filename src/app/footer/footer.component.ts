import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  items = [
    { name: 'Blog', description: '', url: 'https://djvelimir.github.io/blog/'}
  ];

  categories = [
    {
      name: 'Demo Projects',
      items: [
        { name: 'Blog', url: 'https://djvelimir.github.io/blog/' },
        { name: 'Angular', url: 'https://djvelimir.github.io/demo-spa-angular/' },
        { name: 'Vue', url: 'https://djvelimir.github.io/demo-spa-vue/' },
        { name: 'React', url: 'https://djvelimir.github.io/demo-spa-react/' },
        { name: 'Vite + React', url: 'https://djvelimir.github.io/demo-spa-react-vite/' },
      ]
    },
    {
      name: 'Source Code',
      items: [
        { name: 'Java - CLI', url: 'https://github.com/djvelimir/demo-java-cli' },
        { name: 'Java - Swing', url: 'https://github.com/djvelimir/demo-java-swing' },
        { name: 'Java - FX', url: 'https://github.com/djvelimir/demo-java-fx' },
        { name: 'Java - Spring Boot', url: 'https://github.com/djvelimir/demo-java-spring-boot' },
        { name: 'Kotlin - CLI', url: 'https://github.com/djvelimir/demo-kotlin-cli' },
        { name: 'C# .NET - CLI', url: 'https://github.com/djvelimir/demo-dotnet-cli' },
        { name: 'C# .NET - Benchmark', url: 'https://github.com/djvelimir/demo-dotnet-benchmark' },
        { name: 'C# .NET - WebApi', url: 'https://github.com/djvelimir/demo-dotnet-web-api' },
        { name: 'C++ - CLI', url: 'https://github.com/djvelimir/demo-cpp-cli' },
        { name: 'Rust', url: 'https://github.com/djvelimir/demo-rust' },
        { name: 'Go', url: 'https://github.com/djvelimir/demo-go' },
        { name: 'Python - CLI', url: 'https://github.com/djvelimir/demo-python-cli' },
        { name: 'Node.js', url: 'https://github.com/djvelimir/demo-node' },
        { name: 'Angular', url: 'https://github.com/djvelimir/demo-spa-angular' },
        { name: 'Vue', url: 'https://github.com/djvelimir/demo-spa-vue' },
        { name: 'React', url: 'https://github.com/djvelimir/demo-spa-react' },
        { name: 'Vite + React', url: 'https://github.com/djvelimir/demo-spa-react-vite' },
        { name: 'Android', url: 'https://github.com/djvelimir/demo-mobile-android' },
        { name: 'iOS', url: 'https://github.com/djvelimir/demo-mobile-ios' },
      ]
    },
  ];
}
