import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/chacarter.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})

export class CharacterComponent {

  //con @OutPut emitimos eventos al padre---
  @Output()
  public onNewCharacter:EventEmitter<Character> = new EventEmitter();//Creamos instancia del emisor de eventos

  public character:Character={
    name:'',
    power:0
  };

  emitCharacter():void{

    console.log(this.character)//imprimno el objeto dee caracter
    if(this.character.name.length===0) return;//Si no veine el nombre no voy a aceptar el evento

    //caso contrario, que si se emita un nombre entonces emitimos el nuevo personaje
    this.onNewCharacter.emit(this.character)


    //al disparar el evento limpiará el fornulario
    this.character={name:'', power:0}


  }

}
