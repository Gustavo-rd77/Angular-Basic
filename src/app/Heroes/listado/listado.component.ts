import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent  {

  heroes:string[] = ['Spiderman','Hulk','Thor','Capitan America'];
  item:string = '';
  deleteHeroe():void{
   this.item = this.heroes.shift() || '';
  }



}
