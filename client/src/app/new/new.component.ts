import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.new_question);
  }

}
