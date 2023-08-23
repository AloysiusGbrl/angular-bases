import { Component} from '@angular/core';
import { Character } from '../interfaces/chacarter.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent{
  //Inyectamos el servicio
  //Esto se me habilitará en todo mi componente de MainpAGE toda la información que esté siendo utilizada en el servicio
  constructor(private dbzService:DbzService){
  }
  get characters():Character[]{
    return [...this.dbzService.characters];//con ... creo una copia de todos los personajes que tengo
  }

  onDeleteCharacter(id:string):void{
    this.dbzService.deleteCharacterById(id);
  }
  onNewCharacter(character:Character):void{
    this.dbzService.addCharacter(character);
  }
}
