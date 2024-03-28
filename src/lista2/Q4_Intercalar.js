/*
QUESTÃO 4: Implemente uma função para intercalar filas, a função ao recebe as duas filas como
parâmetro e retorna uma fila com os elementos das duas filas intercalados.
*/

import Fila from "../aula/Fila";

export default function IntercalarFilas(fila1, fila2) {
  let auxFila = new Fila(fila1.size() + fila2.size());

  while (!(fila1.isEmpty() || fila2.isEmpty())) {
    auxFila.enqueue(fila1.dequeue());
    auxFila.enqueue(fila2.dequeue());
  }

  return auxFila.toString();
}
