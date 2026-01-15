import { Injectable } from '@angular/core';
import { IProduct } from '../model/product';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
productArr:Array<IProduct>=[
  {
    id: "101",
    name: 'Laptop',
    price: 55000,
    category: 'Electronics'
  },
  {
    id: "102",
    name: 'Mobile',
    price: 20000,
    category: 'Electronics'
  }
]


fetchProducts():Observable<IProduct[]>{
  return of(this.productArr);
}

fetchProduct(prodId: string): Observable<IProduct> {
  return of(
    this.productArr.find(f => f.id === prodId) as IProduct
  );
}


createProduct(productObj:IProduct):Observable<IProduct>{
  this.productArr.push(productObj)
  return of (productObj)
}

updateProduct(updateProduct:IProduct):Observable<IProduct>{
  let getIndex=this.productArr.findIndex(p=>p.id===updateProduct.id)
  this.productArr[getIndex]=updateProduct
  return of(updateProduct)

}





removeProduct(id: string): Observable<IProduct> {
  const index = this.productArr.findIndex(p => p.id === id);
  const removed = this.productArr.splice(index, 1);
  return of(removed[0]);
}


}
