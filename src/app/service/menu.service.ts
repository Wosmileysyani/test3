import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Menu} from '../models/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  baseUrl: String = 'http://chapayom.codehansa.com/crud_menus.php?';

  constructor(private http: HttpClient) { }

  getmenu() {
    return this.http.get<Menu[]>(this.baseUrl + 'cmd=select');
  }
}
