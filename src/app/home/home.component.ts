import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  items = [
    { name: 'Hugo', description: `Welcome to Hugo's World! This website showcases the versatility and power of Hugo, a modern open-source static site generator. With Hugo, we've built a comprehensive platform for exploring the world of web development, featuring tutorials, documentation, and resources for developers of all levels. Dive in to learn how to create your own stunning website with Hugo!`, url: 'https://djvelimir.github.io/blog/' },
    { name: 'Angular', description: `Welcome to our Angular App! This demo showcases the power of Angular's Routing module. With just a few lines of code, we've created a robust and scalable application that navigates between multiple pages. Explore our app and see how easily you can switch between different routes, each with its own unique component and functionality. Whether you're building a simple web page or a complex enterprise application, Angular's Routing module is the perfect tool to get you started.`, url: 'https://djvelimir.github.io/demo-spa-angular/' },
    { name: 'Vue', description: `Welcome to our example Vue app with Router! In this demo, we've created a simple application that showcases the power of Vue Router. With just a few lines of code, we've built a fully functional app that allows users to navigate between different routes and views. Each route is carefully crafted to demonstrate the flexibility and scalability of Vue Router. Take a closer look and see how you can use Vue Router to build your own impressive web applications.`, url: 'https://djvelimir.github.io/demo-spa-vue/' },
    { name: 'React', description: `Get started with React and routing in our comprehensive example app. Explore a simple but fully functional React app that utilizes the popular React Router library to manage client-side routing. This example app demonstrates how to set up routes and navigate between pages. Whether you're new to React or just looking to improve your skills, this example app is a great resource for learning how to add robust routing to your React projects.`, url: 'https://djvelimir.github.io/demo-spa-react/' },
    { name: 'Vite + React', description: `Get started with a powerful React app using TypeScript, Vite, and React Router. This example showcases a fully-fledged React application built with TypeScript for robust type checking and Vite for fast development and zero-config setup. With React Router, navigate through a seamless user interface with easy-to-use routing features. Explore the code and learn how to leverage these popular technologies to build your next-generation web application.`, url: 'https://djvelimir.github.io/demo-spa-react-vite/' },
  ]
}
