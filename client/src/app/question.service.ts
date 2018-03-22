import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class QuestionService {

  // services can be very simple.

  // they are just a collection of http requests that
  // connect to the data endpoints on our server

  // .get(url)
  // .post(url, postdata)

  // make sure you import and inject the http client!

  constructor(private _http: HttpClient) { }

  getAll() {
    return this._http.get('/questions');
  }

  createQuestion(data) {
    return this._http.post('/question', data);
  }

}
