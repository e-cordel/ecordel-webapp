import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ec-call-to-action',
  templateUrl: './call-to-action.component.html',
  styleUrls: ['./call-to-action.component.css']
})
export class CallToActionComponent implements OnInit {
  title = 'e-cordel app';
  text = "Baixe o nosso app e tenha acesso a vários cordéis sempre que desejar."

  constructor() { }

  ngOnInit() {
  }

}
