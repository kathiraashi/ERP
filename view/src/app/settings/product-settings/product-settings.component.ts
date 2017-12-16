import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-settings',
  templateUrl: './product-settings.component.html',
  styleUrls: ['./product-settings.component.css']
})
export class ProductSettingsComponent implements OnInit {
  
  // Left Side Radio Buttons
  ProductsType = [ 'Can Be Sold', 'Can Be Purchased' ];
  ProductType = 'Can Be Sold';
  ProductsVariants = [ 'Our Products Have Variants', 'Our Product Does Not Have Variants' ];
  ProductVariant = 'Our Products Have Variants';
  ProductsHsnCodes = [ 'Require HSN/SAC Code', 'Do Not Require HSN/SAC Code' ];
  ProducHsnCode = 'Require HSN/SAC Code';
  ProductsItemCodes = [ 'Require Item Code', 'Do Not Require Item Code' ];
  ProductItemCode = 'Require Item Code';
  ProductsBarCodes = [ 'Require Bar Code', 'Do Not Require Bar Code' ];
  ProductBarCode = 'Require Bar Code';

  constructor() { }

  ngOnInit() {
  }

}
