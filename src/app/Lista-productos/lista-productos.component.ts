import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  productos: any[];

  constructor() {
    const producto1 = {
      nombre: 'producto1',
      descripcion: 'descripcion producto1',
      comprado: false,
    };
    const producto2 = {
      nombre: 'producto2',
      descripcion: 'descripcion producto2',
      comprado: false,
    };
    const producto3 = {
      nombre: 'producto3',
      descripcion: 'descripcion producto3',
      comprado: false,
    };


    this.productos = [];
    this.productos.push(producto1);
    this.productos.push(producto2);
    this.productos.push(producto3);
  }
    ngOnInit() {
    }

    comprar(producto) {
    producto.comprado = !producto.comprado;
    }
  }
