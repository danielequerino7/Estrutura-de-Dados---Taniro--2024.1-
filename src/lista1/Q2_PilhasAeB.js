/*
QUESTAO 2: Uma Pilha pode ser definida como um conjunto ordenado de dados, no qual os
dados podem ser inseridos ou removidos a partir de uma extremidade chamada topo da pilha.
Duas pilhas A e B podem ser implementas a partir do compartilhamento do mesmo vetor de
tamanho determinado, como apresentado na figura a seguir. Escreva as seguintes funções em
Javascript.
i. Declarações de constantes e procedimento de inicializar as pilhas (os valores de
topoA e topoB).
ii. As funções ÉVaziaA e ÉVaziaB.
iii. As funções empilhaA, empilhaB, desempilhaA e desempilhaB. Só deve ser
emitida uma mensagem de pilha cheia se todas as posições do vetor estiverem ocupadas.
*/

export default class PilhasAeB {
  constructor(tam = 5) {
    this.vetor = [];
    this.tam = tam;
    this.topoA = 0;
    this.topoB = tam;
  }

  pushA(item) {
    if (!this.isFull()) {
      return (this.vetor[this.topoA++] = item);
    }
    throw new Error("Stackoverflow");
  }

  pushB(item) {
    if (!this.isFull()) {
      return (this.vetor[--this.topoB] = item);
    }
    throw new Error("Stackoverflow");
  }

  popA() {
    if (!this.isEmptyA()) {
      return this.vetor[--this.topoA]; 
    } 
    throw new Error("Stackunderflow");
  }

  popB() {
    if (!this.isEmptyB()) {
      return this.vetor[this.topoB++];
    }
    throw new Error("Stackunderflow");
  }

  isEmptyA() {
    return this.topoA === 0;
  }

  isEmptyB() {
    return this.topoB === this.tam;
  }

  isFull() {
    //|| this.topoA + 1 === this.topoB
    if (this.topoA === this.topoB) {
      return true; // está cheia
    }
    return false; // caso nao esteja cheia
  }

  toStringA() {
    let pilhaA = [];
    for (let i = 0; i < this.topoA; i++) {
      pilhaA[i] = this.vetor[i];
    }
    return pilhaA.join("-");
  }

  toStringB() {
    let pilhaB = [];
    // i = 1    i >= 2
    for (let i = this.tam - 1; i >= this.topoB; i--) {
      pilhaB[i] = this.vetor[i]; // b1 b2 b3
    }
    return pilhaB.join("-");
  }

  toString() {
    let pilha = [];
    for (let i = 0; i < this.tam; i++) {
      pilha[i] = this.vetor[i];
    }
    return pilha.join("-");
  }
}
