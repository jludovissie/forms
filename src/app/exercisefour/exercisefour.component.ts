import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercisefour',
  templateUrl: './exercisefour.component.html',
  styleUrls: ['./exercisefour.component.css']
})
export class ExercisefourComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(form:HTMLFormElement){
    console.log(form)
  }
}
