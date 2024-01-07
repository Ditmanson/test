import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  length = 0;
  password = '';
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;

  onButtonClick() {
    console.log(`
      About to generate password that includes:
      Includes Letters: ${this.includeLetters}
      Includes Numbers: ${this.includeNumbers}
      Includes Symbols: ${this.includeSymbols}
      `)
      this.password='password';
  }

  generatePassword() {
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()';
    let validChars = '';
    if (this.includeLetters) {
      validChars += letters;
    }
    if (this.includeNumbers) {
      validChars += numbers;
    }
    if (this.includeSymbols) {
      validChars += symbols;
    }
    let generatedPassword = '';
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }
    this.password = generatedPassword;
  }

  onChangeLength(target: EventTarget) {
    const value = (<HTMLInputElement>target).value;
    const parsedValue = parseInt(value);
    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
    console.log('Use Numbers toggled');
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
    console.log('Use Symbols toggled');
  }

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
    console.log('Use Letters toggled');
  }


}
