/*Counter creado automáticamente con a-   (se comeentaron algunas partes del autocompletado porque aún
  no son temas concernientes)*/
import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter:{{counter}}</h3>
    <button (click)="increaseBy(+1)">+1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="increaseBy(-1)">-1</button>
  `
})

export class CounterComponent /*implements OnInit */{
  public counter:number=10

  increaseBy(value:number):void{
    this.counter +=value
  }
  resetCounter():void{
    this.counter=10
  }

  //ngOnInit() { }
}


//      ---componente creado manualmente
/*import { Component } from '@angular/core';

@Component({
  selector:'app-counter',
  template:'<h1>Hola Counter</h1>'
})
export class CounterComponent{

}*/
