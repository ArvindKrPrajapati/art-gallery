import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {
 @Input() toggleMenu;
  constructor() { }

  ngOnInit(): void {
  }

}
