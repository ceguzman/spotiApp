import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.component.html',
})
export class AlertaComponent implements OnInit {

  @Input() mensajeEror: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
