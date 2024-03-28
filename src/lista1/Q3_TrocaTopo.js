/*
QUESTAO 3: Implemente uma função que troca de lugar o elemento que está no topo da pilha
com o elemento que está na base da pilha. Usar apenas uma pilha como auxiliar
*/

import Pilha from "../aula/Pilha";
// vetor precisa ser uma pilha
export default function TrocaTopo(vetor) {
  let aux1 = new Pilha();
  let final = new Pilha();

  final.push(vetor.pop());
  while (vetor.size() > 1) {
    aux1.push(vetor.pop());
  }

  while (!aux1.isEmpty()) {
    final.push(aux1.pop());
  }

  final.push(vetor.pop());
  return final;
}
