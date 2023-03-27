import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="into-header">
      
      <nav class="navbar navbar-black bg-black">
        <div class="container-fluid">
          <a class="navbar-brand">{{name}}!</a>
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
    
      <section class="view intro-2">
        <div class="full-bg-img">
          <div class="col-6 col-sm-3 py-2 px-2">
            <h1>Inspiring today, release your master piece everywhere.</h1>
            <div class="py-1">
              <button class="btn btn-pink text-uppercase br-12">Discover more</button>
            </div>
          </div>
        </div>
      </section>
    <header>
  `,
})
export class App {
  name = 'Langitku';
}

bootstrapApplication(App);
