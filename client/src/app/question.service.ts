import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class QuestionService {

  // questions;

  constructor(private _http: HttpClient) { }

  getAll() {
    return this._http.get('/questions');
  }



  // getQuestions() {
  //   return this.questions;
  // }

}
