import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public nombreshereos : string [] = ['Iron man','Batman','Super man','Tigrer','Wonder woman'];
  public deletedHered?: string;

  removeLastHero(): void{
    this.deletedHered = this.nombreshereos.pop();

    console.log("deletedhero : ", this.deletedHered);
  }
}
