import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Bebidas } from './Models/RegisProductos';

// importamos el Molde


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent{

  public cUser = 0;
  public cProductos = 0;
  public Ventas = 0;
  public cVentas = 0;
  public New: Bebidas;


  constructor() {
    this.cUser = 1;
    this.cVentas = 344;
    this.cProductos = 22;

    this.New ={
    Marca: "",
    Tipo: "",
    NumSerie: "",
    Imagen: "",
    Precio: 0,
    Cantidad:0,
    };


   }

  public Guardar_Producto(f: NgForm){
    this.New.Marca = (document.getElementById("marcaVino") as HTMLInputElement).value;
    this.New.Tipo = (document.getElementById("txtBebida") as HTMLInputElement).value;
    this.New.NumSerie = (document.getElementById("Numserie") as HTMLInputElement).value;
    this.New.Imagen = (document.getElementById("Imagen") as HTMLInputElement).value;
    this.New.Precio = parseFloat( ( document.getElementById("txtPrecio") as HTMLInputElement).value);
    this.New.Cantidad = parseFloat( ( document.getElementById("txtCantidad") as HTMLInputElement).value);
    console.log(this.New);

  }
}
