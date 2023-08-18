import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})

export class HeroComponent {

  public name:string= 'Ironman'
  public age:number= 45

  get capitalizedName():string{
    return this.name.toUpperCase()//toUpperCase hace todo en String en mayúsculas
  }

  getHeroDescription():string{
    return`${this.name} -${this.age}`
  }

  changeHero(){
    this.name='Aloysius'
  }
  changeAge():void{
    this.age=25
  }
  restForm():void{
    this.name='IronMan'
    this.age=45
  }

}
