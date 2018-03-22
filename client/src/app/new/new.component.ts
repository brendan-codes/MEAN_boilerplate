import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  // create an empty form object
  new_question = {
    question: '',
    desc: ''
  };

  // create an empty errors object
  errors;

  // inject your service
  constructor(private _http: QuestionService, private _router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    // check your form data
    console.log(this.new_question);

    // store the observable into a variable
    const temp = this._http.createQuestion(this.new_question);

    // subscribe to the observable (this sends the http request!)
    temp.subscribe((data) => { // the callback must be an arrow => function
      console.log(data);
      // check your data for errors
      if (data['message'] === 'Error') {
        // load up the errors for display if you have any
        this.errors = data['data'];
        console.log(this.errors);
      } else {
        // else empty out your form object and redirect
        this.new_question = {
          question: '',
          desc: ''
        };
        this._router.navigate(['/']);
      }
    });
  }

}
