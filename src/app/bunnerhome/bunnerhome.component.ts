import { Component, OnInit } from '@angular/core';
import { MenuService } from '../service/menu.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-bunnerhome',
  templateUrl: './bunnerhome.component.html',
  styleUrls: ['./bunnerhome.component.css']
})
export class BunnerhomeComponent implements OnInit {

  itemMenu = [];
  errMsg: string;

  constructor(private menuSV: MenuService,
              private route: Router) { }

  ngOnInit() {
    this.fetchMenu();
  }

  fetchMenu() {
    this.menuSV.getmenu()
    .subscribe(data => this.itemMenu = data,
      error => this.errMsg = error);
  }

}
