import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  new_question = {
    question: '',
    desc: ''
  };

  errors;

  constructor(private _http: QuestionService, private _router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.new_question);
    const temp = this._http.createQuestion(this.new_question);
    temp.subscribe((data) => {

      console.log(data);
      if (data['message'] === 'Error') {
        this.errors = data['data'];
        console.log(this.errors);
      } else {
        this.new_question = {
          question: '',
          desc: ''
        };
        this._router.navigate(['/']);
      }

    });
  }

}
