/*
QUESTAO 4: Implemente um conversor de números decimais para binários utilizando uma pilha.
*/

import Pilha from "../aula/Pilha";

export default class Conversor extends Pilha {
  constructor(tam = 15) {
    super();
    this.tam = tam;
  }

  conversor(num) {
    let resto;
    let binario = "";
    while (num > 0) {
      // math.floor pega a parte inteira de numeros com pontos flutuantes
      resto = Math.floor(num % 2);
      this.push(resto);
      num = Math.floor(num / 2); 
    }
    while (this.topo > 0) {
      binario += this.pop();
    }
    return binario.toString();
  }
}

/* 
resolucao usando função
export default function Conversor(n){
    let resultado = new Pilha(11);
    let auxPilha = new Pilha(11);
    let aux;
    let cont = 0;
    while(n > 0){
        aux = n % 2;
        n = parseInt(n / 2);
        auxPilha.push(aux);
    }
        /// 
    while(auxPilha.length() > 0){
        resultado.push(auxPilha.pop());
    }
    return resultado.toString();
}*/
