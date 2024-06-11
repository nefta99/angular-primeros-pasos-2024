import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { dbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-pages.component.html'
})

export class MainPageComponent {


   constructor( private dbzservice: dbzService){}


   get characters(): Character[]{
    return [...this.dbzservice.characters];
   }


   onDeleteCharacterByidPadres(id: string ) : void{
    this.dbzservice.onDeleteCharacterByIdPadre(id);
   }

   onNewCharacterpapi(character : Character): void{

      this.dbzservice.onNewCharacterPapa(character);

   }




}
