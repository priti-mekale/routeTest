import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { SnackbarService } from '../../services/snackbar.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { IProduct } from '../../model/product';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.scss']
})
export class ProductDashboardComponent implements OnInit {

 productArr:IProduct[]=[]
prodId: any;
  constructor(private _Product1Service:ProductService,
    private _SnackbarService:SnackbarService,
    private _router:Router,
    private _routes:ActivatedRoute
  ) { 
    this._routes.data.subscribe(res=>{
      this.productArr=res['productArr']
    })
  }

  ngOnInit(): void {
    this.getProducts()
   
    if (this.productArr.length > 0) {
    this.getProduct(this.productArr[0]);
  }

  }

trackById(index: number, product: any) {
  return product.id;
}

  getProducts(){
    this._Product1Service.fetchProducts().subscribe({
      next:data=>{
        this.productArr=data
      },
      error:err=>{
        this._SnackbarService.openSnackbar(err)
      }
    })
  }


  getProduct(product: IProduct) {
    this._router.navigate(['/products', product.id]);
  }


    
}
