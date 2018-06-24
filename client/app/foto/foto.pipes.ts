// alurapic/client/app/foto/foto.pipes.ts
import { FotoComponent } from './foto.component';

import {Pipe,PipeTransform} from '@angular/core';
@Pipe({
    name: 'filtroPorTitulo'
})
export class FiltroPorTitulo implements PipeTransform {

    // o correto é transform, eu errei aqui intencionalmente para mostrar algo a seguir!

    transform(fotos: FotoComponent[], digitado: string): FotoComponent[] {

        digitado = digitado.toLowerCase();
        return fotos.filter( foto => foto.titulo.toLowerCase().includes(digitado));
    }
}