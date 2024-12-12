import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  imports: [FormsModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
  n1: number=0
  n2: number=0
  res: number=0
  
  suma():void{
    this.res=this.n1 + this.n2
  }
  resta():void{
    this.res=this.n1 - this.n2
  }
  multiplicacion():void{
    this.res=this.n1 * this.n2
  }
  division():void{
    this.res=this.n1 / this.n2
  }
  borrar():void{
    this.n1 = 0;
    this.n2 = 0;
    this.res = 0;

  }

}
