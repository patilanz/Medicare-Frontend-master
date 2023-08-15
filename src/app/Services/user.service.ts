import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {OrderDetails} from '../order-details';
import {Product} from '../product';
import {User} from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = 'https://9e74-2a0c-5a80-a107-6700-f9fc-b122-8f85-6c59.ngrok-free.app';


  constructor(private http: HttpClient) {
  }

  public userSignUp(user: User): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/user/signup`, user);
  }

  public addMedicine(product: Product): Observable<any> {
    let formData = new FormData();
    formData.append('product', JSON.stringify(product));
    return this.http.post<any>(`${this.baseUrl}/add/product`, formData);
  }

  public getAllMedicine(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/get/all-products`);
  }

  public getMedicineByName(name: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/get/products/${name}`);
  }

  public getMedicineByCategory(category: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/get/products-by-category/${category}`);
  }

  public deleteMedicine(pid: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/delete/product/${pid}`);
  }

  public findById(pid: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/get-product/${pid}`);
  }

  public updateMedicine(pid: number, product: Product): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/update/product/${pid}`, product);
  }

  public setAvailable(pid: number, product: Product): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/set-availability/product/${pid}`, product);
  }

  public createOrder(orderDetails: OrderDetails): Observable<OrderDetails> {
    return this.http.post<OrderDetails>(`${this.baseUrl}/user/create/order`, orderDetails);
  }

  public getOrderById(oid: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/get/order-invoice/${oid}`);
  }

  public getAllOrders(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/get/all/orders`);
  }

  public deleteOrder(oid: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/delete/order/${oid}`);
  }

  public getOrderByUsername(username: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/get/orders/${username}`);
  }


}
