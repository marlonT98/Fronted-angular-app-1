import { Injectable } from '@angular/core';
import { Product } from '../models/Product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products:Product[] = [

    {
      id:1,
      name:"Mesa",
      description:"mesa para el comedor",
      price:1200
    },
    {
      id:2,
      name:"mause",
      description:"mause para la pc",
      price:200
    },
    {
      id:1,
      name:"teclado",
      description:"teclado para escribir de forma mecanica",
      price:100
    }

   ];


  constructor() { }

}
