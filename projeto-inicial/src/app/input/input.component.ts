import { Component } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: false,
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  inputText = '';
  inputType = 'text';
  isDisabled = false;

  enableInput() {
    this.isDisabled = false;
  }
  disableInput() {
    this.isDisabled = true;
  }
  setPasswordTypeInput() {
    this.inputType = 'password';
  }
  setTextTypeInput() {
    this.inputType = 'text';
  }
  logInputText() {
    console.log(this.inputText);
  }

  handleInputKeyup(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.inputText = value;
  }
}
