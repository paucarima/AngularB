import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from "./components/user/user.component";
import { ProductComponent } from "./components/product/product.component";

@Component({
  selector: 'root',
  standalone: true,
  //estos import voy a aplicar en el template
  imports: [RouterOutlet, UserComponent, ProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title:string = 'ejemplos u-u';
  author:string="Esto es un componenet clase";
}
