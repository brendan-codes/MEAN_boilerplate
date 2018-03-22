import { Component } from '@angular/core';

// we almost never have to modify our app.component, however
// we can and will edit app.component.html to add our router outlet

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
