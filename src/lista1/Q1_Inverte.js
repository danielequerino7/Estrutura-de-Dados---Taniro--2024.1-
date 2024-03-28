/*
QUESTAO 1: Uma estrutura de dados do tipo pilha pode ser usada
em um algoritmo que permite imprimir uma palavra de forma invertida. Por exemplo, ABACAXI
deve ser impresso IXACABA. Utilizando uma pilha e suas operações base, desenvolva a função
inverte que recebe uma String e, utilizando as funções push e pop da pilha, retorne a palavra de
forma invertida. 
*/

import Pilha from "../aula/Pilha";

export default function Inverte(palavra) {
  let p = new Pilha(palavra.length);
  let palavraInvertida = "";

  for(let letra of palavra){ //le-se: para cada letra da palavra 
    p.push(letra);
  }
 
  /* o for anterior é mesma coisa que:
    for (let i = 0; i < palavra.length; i++) { 
      p.push(palavra[i]);
    }
  */

  while(!p.isEmpty()){ // enquanto pilha não for vazia
    palavraInvertida += p.pop();
  }

  return palavraInvertida
}


