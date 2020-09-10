import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbsService {

  constructor() { }

  getMenu(): Array<any> {
    const menu = [
      { name: 'home', path: './dashboard', 
        children: [
          {
            name: 'Facturación Electrónica', path: './consulta-especial', children: []
          }
        ] 
      },
      { name: 'stores', path: './stores', children: [
          {
            name: 'books',
            path: './books',
            children: [
              { 
                name: 'THE FELLOWSHIP OF THE RING Details',
                path: './book1'
              },
              { 
                name: 'THE RETURN OF THE KING',
                path: './book2'
              },
              { 
                name: 'Harry Potter and the Philosopher\'s Stone',
                path: './book3'
              },
              { 
                name: 'Harry Potter and the Chamber of Secrets',
                path: './book4'
              }              
            ]
          }
        ] 
      },
    ];

    return menu;
  }
}
