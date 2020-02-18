import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public subCategory: any;
  public products: any;
  public _image_url =  'http://rjtmobile.com/grocery/images/';

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getSubCategory(1).subscribe(
      x => this.subCategory = x.data
    )

    this.dataService.getProducts(1).subscribe(
      x => this.products = x.data
    )
  }

}
