import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {
  result = '0';
  memoryResult: number;
  operator: string;
  error = 'Błąd';

  constructor() { }

  ngOnInit() {
  }

  insertNumber(value: any) {
    if (this.result === '+' || this.result === '-' || this.result === '×' || this.result === '/' || this.result === this.error || this.result === '0') {
      this.result = value;
    } else {
      this.result += value;
    }
  }

  arithmeticOperation(operator: string) {
    this.operator = operator;
    this.memoryResult = Number(this.result);
    this.result = operator;
  }

  showResult() {
    if (Number.isNaN(this.memoryResult)) {
      this.result = this.error;
      this.operator = '';
      return;
    }
    if (this.operator === '+') {
      this.memoryResult = Number(this.memoryResult) + Number(this.result);
    } else if (this.operator === '-') {
      this.memoryResult = Number(this.memoryResult) - Number(this.result);
    } else if (this.operator === '×') {
      this.memoryResult = Number(this.memoryResult) * Number(this.result);
    } else if (this.operator === '/') {
      if (this.result === '0') {
        this.result = this.error;
        this.operator = '';
        return;
      } else {
        this.memoryResult = Number(this.memoryResult) / Number(this.result);
      }
    }
    this.result = this.memoryResult.toString();
    this.operator = '';
  }

  clearDisplay() {
    this.result = '0';
    this.memoryResult = 0;
    this.operator = '';
  }

  insertDot() {
    this.result += '.';
  }
}
