import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="navbar navbar-black bg-black">
      <div class="container-fluid">
        <a class="navbar-brand">Langitku</a>
        <form class="d-flex align-items-center">
          <div class="dropdown-small me-2">
            <button class="btn btn-sm btn-outline-light dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              IDN
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a class="dropdown-item" href="#">Indonesia</a></li>
              <li><a class="dropdown-item" href="#">English</a></li>
            </ul>
          </div>
          <button class="btn btn-outline-light text-uppercase br-12 me-2" type="submit">Login</button>
          <button class="btn btn-pink text-uppercase br-12" type="submit">Join Us</button>
        </form>
      </div>
    </nav>
    
    <div class="container">
      <h1>Hello from {{name}}!</h1>
      <a target="_blank" href="https://angular.io/start">
        Learn more about Angular 
      </a>
      <div class="d-flex justify-content-center py-1">
        <button class="btn btn-primary">I'm a button</button>
      </div>
    </div>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
