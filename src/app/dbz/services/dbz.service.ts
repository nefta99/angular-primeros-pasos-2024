import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4  as uuid} from 'uuid';



@Injectable({
  providedIn: 'root'
})
export class dbzService {


  public characters: Character[] =[{
    id: uuid(),
    name: 'Trilink',
    power: 1000
  },
  {
    id: uuid(),
    name: 'Goku',
    power: 9500
  },
  {
    id: uuid(),
    name: 'Vengeta',
    power: 7500
  }
];


onNewCharacterPapa(character: Character): void{

//Se remplaza por la linea de abajo
  /*const newCharacter: Character={
    id : uuid(),
    name: character.name,
    power: character.power
  }*/

  const newCharacter: Character = {id: uuid(), ...character};


  this.characters.push(newCharacter);
}


onDeleteCharacterPadre(index : number){
  console.log("Se elimina ",index );
  this.characters.splice(index,1);
}


onDeleteCharacterByIdPadre(id: string){
  this.characters = this.characters.filter(character => character.id !== id);
}



}
