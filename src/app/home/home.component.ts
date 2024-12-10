import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  products = [
    {
      name: 'Product 1',
      description: 'Description of Product 1',
      price: 10.99,
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Product 2',
      description: 'Description of Product 2',
      price: 20.99,
      image: 'https://via.placeholder.com/150',
    },
    // Añadir más productos
  ];
}
