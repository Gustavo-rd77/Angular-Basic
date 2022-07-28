import { Component } from "@angular/core";

@Component({
    selector:'app-heroe',
    templateUrl: 'heroe.component.html'
})

export class HeroeComponent{
    nombre:string = 'Iroman';
    edad:number = 40;

    get nombreCapitalizado(){
        return this.nombre.toLocaleUpperCase();
    }
    
     setNombre(nombre:string):void{
        this.nombre = nombre;
    }
    setEdad(edad:number):void{
        this.edad = edad;
    }
    obtenerNombre():string{
        return `${this.nombre} - ${this.edad}`;
    }
}