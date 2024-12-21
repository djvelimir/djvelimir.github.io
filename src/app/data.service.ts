import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  getDemoSectionItems() {
    return [
      {
        name: 'Angular',
        description: `Welcome to our Angular App! This demo showcases the power of Angular's Routing module. With just a few lines of code, we've created a robust and scalable application that navigates between multiple pages. Explore our app and see how easily you can switch between different routes, each with its own unique component and functionality. Whether you're building a simple web page or a complex enterprise application, Angular's Routing module is the perfect tool to get you started.`,
        url: 'https://djvelimir.github.io/demo-spa-angular/',
      },
      {
        name: 'Vue',
        description: `Welcome to our example Vue app with Router! In this demo, we've created a simple application that showcases the power of Vue Router. With just a few lines of code, we've built a fully functional app that allows users to navigate between different routes and views. Each route is carefully crafted to demonstrate the flexibility and scalability of Vue Router. Take a closer look and see how you can use Vue Router to build your own impressive web applications.`,
        url: 'https://djvelimir.github.io/demo-spa-vue/',
      },
      {
        name: 'React',
        description: `Get started with React and routing in our comprehensive example app. Explore a simple but fully functional React app that utilizes the popular React Router library to manage client-side routing. This example app demonstrates how to set up routes and navigate between pages. Whether you're new to React or just looking to improve your skills, this example app is a great resource for learning how to add robust routing to your React projects.`,
        url: 'https://djvelimir.github.io/demo-spa-react/',
      },
      {
        name: 'Vite + React',
        description: `Get started with a powerful React app using TypeScript, Vite, and React Router. This example showcases a fully-fledged React application built with TypeScript for robust type checking and Vite for fast development and zero-config setup. With React Router, navigate through a seamless user interface with easy-to-use routing features. Explore the code and learn how to leverage these popular technologies to build your next-generation web application.`,
        url: 'https://djvelimir.github.io/demo-spa-react-vite/',
      },
      {
        name: 'Blazor',
        description: `A Blazor demo application showcasing routing allows developers to create single-page applications with seamless navigation. By leveraging Blazor's component-based architecture, the demo highlights how to set up routes using the @page directive, enabling users to navigate between components effortlessly. The application features a simple layout with multiple views.`,
        url: 'https://djvelimir.github.io/demo-spa-blazor/',
      },
      {
        name: 'Hugo',
        description: `Welcome to Hugo's World! This website showcases the versatility and power of Hugo, a modern open-source static site generator. With Hugo, we've built a comprehensive platform for exploring the world of web development, featuring tutorials, documentation, and resources for developers of all levels. Dive in to learn how to create your own stunning website with Hugo!`,
        url: 'https://djvelimir.github.io/blog/',
      },
    ];
  }

  getFooterCategories() {
    return [
      {
        name: 'Frontend',
        items: [
          {
            name: 'Angular',
            url: 'https://github.com/djvelimir/demo-spa-angular',
          },
          { name: 'Vue', url: 'https://github.com/djvelimir/demo-spa-vue' },
          { name: 'React', url: 'https://github.com/djvelimir/demo-spa-react' },
          {
            name: 'Vite + React',
            url: 'https://github.com/djvelimir/demo-spa-react-vite',
          },
          {
            name: 'Blazor',
            url: 'https://github.com/djvelimir/demo-spa-blazor',
          },
          { name: 'Hugo', url: 'https://github.com/djvelimir/blog' },
        ],
      },
      {
        name: 'Java & Kotlin',
        items: [
          {
            name: 'Java - CLI',
            url: 'https://github.com/djvelimir/demo-java-cli',
          },
          {
            name: 'Java - Swing',
            url: 'https://github.com/djvelimir/demo-java-swing',
          },
          {
            name: 'Java - FX',
            url: 'https://github.com/djvelimir/demo-java-fx',
          },
          {
            name: 'Java - Spring Boot',
            url: 'https://github.com/djvelimir/demo-java-spring-boot',
          },
          {
            name: 'Kotlin - CLI',
            url: 'https://github.com/djvelimir/demo-kotlin-cli',
          },
        ],
      },
      {
        name: '.NET',
        items: [
          {
            name: 'C# .NET - CLI',
            url: 'https://github.com/djvelimir/demo-dotnet-cli',
          },
          {
            name: 'C# .NET - Benchmark',
            url: 'https://github.com/djvelimir/demo-dotnet-benchmark',
          },
          {
            name: 'C# .NET - WebApi',
            url: 'https://github.com/djvelimir/demo-dotnet-web-api',
          },
        ],
      },
      {
        name: 'Mobile',
        items: [
          {
            name: 'Android',
            url: 'https://github.com/djvelimir/demo-mobile-android',
          },
          { name: 'iOS', url: 'https://github.com/djvelimir/demo-mobile-ios' },
        ],
      },
      {
        name: 'Misc',
        items: [
          {
            name: 'Assembly',
            url: 'https://github.com/djvelimir/demo-assembly',
          },
          { name: 'C', url: 'https://github.com/djvelimir/demo-c' },
          { name: 'C++', url: 'https://github.com/djvelimir/demo-cpp-cli' },
          { name: 'Rust', url: 'https://github.com/djvelimir/demo-rust' },
          { name: 'Go (Golang)', url: 'https://github.com/djvelimir/demo-go' },
          {
            name: 'Python',
            url: 'https://github.com/djvelimir/demo-python-cli',
          },
          { name: 'Node.js', url: 'https://github.com/djvelimir/demo-node' },
          { name: 'Ruby', url: 'https://github.com/djvelimir/demo-ruby-quine' },
          { name: 'PHP', url: 'https://github.com/djvelimir/demo-php' },
        ],
      },
    ];
  }
}
