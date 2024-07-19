import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/Product';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{

  products:Product[]=[];//creamos un array vacio

  //---contrustor que pasamos por parametro nuestro service (ahi estan los productos)
  constructor( private  service:ProductService ){
  }

  //inicializamos con todos los productos del servicio al array vacio que creamos
  ngOnInit(): void {
    this.service.findAll().subscribe(products => {
      this.products = products;
    });
  }




}
