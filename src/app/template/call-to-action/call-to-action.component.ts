import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ec-call-to-action',
  templateUrl: './call-to-action.component.html',
  styleUrls: ['./call-to-action.component.css']
})
export class CallToActionComponent implements OnInit {
  title = 'e-cordel app';
  text = "Visite nosso site e saiba mais sobre o projeto."

  constructor() { }

  ngOnInit() {
  }

}
