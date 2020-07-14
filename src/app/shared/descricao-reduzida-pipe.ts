import {Pipe ,PipeTransform} from '@angular/core'
// decorar a class para que o angular saiba que é um pipe
@Pipe({
    // nome do meu pipe
    name: "descricaoReduzida"
})
export class descricaoReduzida implements PipeTransform{
    // como o novo pipe vai truncar string, então o tipo é string

    transform(texto : string, trucarEm: number, iniciarEm : number) : string{

        if(texto.length > trucarEm){
            // posição inicial e final da string (iniciarEm || 0, 15 || trucarEm)
            return texto.substr(iniciarEm, trucarEm) + "..."
        }
        return texto

    }

}