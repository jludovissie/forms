import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-exercisethree',
  templateUrl: './exercisethree.component.html',
  styleUrls: ['./exercisethree.component.css']
})
export class ExercisethreeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(form : NgForm){
    console.log(form)
  }
}
