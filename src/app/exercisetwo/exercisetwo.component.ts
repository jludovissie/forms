import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercisetwo',
  templateUrl: './exercisetwo.component.html',
  styleUrls: ['./exercisetwo.component.css']
})
export class ExercisetwoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(form: HTMLFormElement) {
    console.log(form)
  }
}
