import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculator Application';
  btnvalue = '' ;
  number1 : string;
  number2 : string ;
  result : number;


  Add()
  {
    this.btnvalue='+';
    this.result= parseInt(this.number1)  + parseInt(this.number2);
  }
  Subtract()
  {
    this.btnvalue='-';
    this.result= parseInt(this.number1)  - parseInt(this.number2);
  }
  Multiply()
  {
    this.btnvalue='*';
    this.result= parseInt(this.number1) * parseInt(this.number2);
  }
  Divide(){
    this.btnvalue='/';
    this.result= parseInt(this.number1)  / parseInt(this.number2);

  }

  Clear()
  {
    this.btnvalue='';
    this.number1='';
    this.number2 ='';
    this.result=0;
  }
}
