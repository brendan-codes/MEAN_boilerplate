import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // define local variable inside component class
  // to hold onto the result of our http requests
  questions;

  // inject any services we need to use here
  constructor(private _http: QuestionService) { }

  // use this method for anything that must load
  // when this component loads.
  ngOnInit() {
    this.getAllQuestions();
  }

  getAllQuestions() {
    const temp = this._http.getAll();
    temp.subscribe((data) => {
      this.questions = data;
    });
  }
}
