import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Output() getUserDetails: EventEmitter<string> = new EventEmitter<string>();

  inputValue: string = '';

  handleGetUser() {
    this.getUserDetails.emit(this.inputValue);
  }

  getInputValue(event: Event) {
    const { value } = event.target as HTMLInputElement;

    this.inputValue = value;
  }
}
