import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html'
})
export class TarjetasComponent implements OnInit {

  @Input() Items: any[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

}
