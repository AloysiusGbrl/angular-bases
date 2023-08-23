import { Injectable } from '@angular/core';
import{ v4 as uuid } from 'uuid'
import { Character } from '../interfaces/chacarter.interface';

//console.log(uuid())

//el decorador de inyectable haste a esta clase un SERVICIO
@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters:Character[]=[{
    id:uuid(),
    name:'Krilin',
    power:1000
  },
  {
    id:uuid(),
    name:'Goku',
    power:9500
  },
  {
    id:uuid(),
    name:'Vegeta',
    power:9450
  }];

    //onNewCharacter(character:Character):void{ //Forma 1
    //onNewCharacter({name, power}:Character):void{//Froma 2
addCharacter(character:Character):void{//Forma 3, la mejor forma
    const newCharacter:Character={id:uuid(),...character};/*Con esto digo que tome todadas las propiedades de tipo Character y
    esparcelas en el nuevo objeto const newCharacter */
    this.characters.push(newCharacter);

    /*//this.characters.push(character);//   Coloca los items al finalk del arreglo
    //this.characters.unshift;    --Coloca los nuevos items al inicio dsel arreglo*/

    /*console.log('Main Page')
    console.log(character)*/
  }
  /*onDeleteCharacter(index:number):void{
    this.characters.splice(index,1)
  }*/
deleteCharacterById(id:string):void{
    this.characters=this.characters.filter(character=>character.id !==id);
  }
}
