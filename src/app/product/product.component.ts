import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Http, Headers} from '@angular/http';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  dataSource: Observable<any>;
  products: Observable<any>;
  // products: Array<any> = [];

  constructor(private http: Http) {
    let myHeaders: Headers = new Headers();
    myHeaders.append('Authorization', 'Basic 123456');

    this.products = this.http.get('/products', {headers: myHeaders})
      .pipe(map((res) => res.json()));

    // this.dataSource = this.http.get('/products')
    //   .pipe(map((res) => res.json()));
  }

  ngOnInit() {
    // this.dataSource.subscribe(
    //   (data) => this.products = data
    // );
  }

}
