import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})
export class PublicComponent implements OnInit {

  constructor() {
    // window.onscroll = (event: Event) => {
    //   console.log(document.documentElement.scrollTop);
    // }
  }

  ngOnInit(): void {
  }

}
