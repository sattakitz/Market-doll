import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.scss']
})
export class SecureComponent implements OnInit {
  sCollapsed = false;
  constructor() { }

  ngOnInit(): void {
  }

  setSidebarCollapse() {
    this.sCollapsed = !this.sCollapsed;
  }

}
