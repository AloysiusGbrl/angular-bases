import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/chacarter.interface';

@Component({
  selector: 'bdz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {
  //      --- Comunicación entre componentes ---
  //con el decoradorm Input puedo recibir propiedades del exterior
  @Input()//Mi listComponent puede recibir una propiedad llamada characterList:
  public characterList:Character[]=[{
    name:'Trunks',//coloco datos en caso de no recibir las propiedades:
    power:10
  }]

  //Para emitir el index que después usaremos para eliminar un elemento del array:
  @Output()//Creamos el emisor de evento
  onDelete:EventEmitter<string>=new EventEmitter()

  onDeleteCharacter(id?:string):void{
    //console.log(index)
    if(!id)return;//si Id biene vaciío, no se hace nada
    //console.log(id)
    this.onDelete.emit(id)//capturamos el valor del índice y emitimos el
  }

}
