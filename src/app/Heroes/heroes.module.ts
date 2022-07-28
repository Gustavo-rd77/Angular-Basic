import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from "./Heroe/heroe.component";
import { ListadoComponent } from "./listado/listado.component";

@NgModule({
    declarations:[      //que componentes contiene este modulo
        HeroeComponent,
        ListadoComponent
    ],
    exports:[  //que cosas quiero hacer publicas
        ListadoComponent
    ],
    imports:[  //se declaran todos los modulos
        CommonModule
    ]
})

export  class HeroeModule{

}