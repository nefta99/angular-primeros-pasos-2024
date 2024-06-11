import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4  as uuid} from 'uuid';


@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'

})
export class ListComponent {

  @Input()
  public characterList: Character[] =[{
    id: uuid(),
    name: 'Trunks',
    power: 10
  }]


  @Output()
  public onDeleteCharaterHijo: EventEmitter<string> = new EventEmitter();

  ondeleteHijo(index : number):void{
    console.log("Indice hijo");
    console.log(index)
  }


  onDeleteCharacter(id? : string ): void{
    // TODO: Emiter el ID del personaje

    //Si no tengo un id no voy hacer nada.
    if(!id) return;

    console.log({id});

    this.onDeleteCharaterHijo.emit(id);

  }




 }
