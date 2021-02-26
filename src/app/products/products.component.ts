import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommandeComponent } from '../commande/commande.component';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
exist = false;
 
  constructor(public dialog: MatDialog,public productService : ProductService) { }

  ngOnInit(): void {
    setTimeout(() => {   
      this.exist = true;
      this.productService.getAllProduct();
      console.log(this.productService.products);
    }, 4000);
  }

commande(item :any){
  
  this.dialog.open(CommandeComponent, {
    data: {
      item: item
    }
  });
}

}

