import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userAnswer: '';
  answerDisplay:  '';
  showSpinner: boolean;

  showAnswer() {
    this.showSpinner = true;

    setTimeout(() => {
      this.answerDisplay = this.userAnswer;
      this.showSpinner = false;
    }, 2000);
  }

}
