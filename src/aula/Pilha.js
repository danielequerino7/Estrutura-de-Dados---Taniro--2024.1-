export default class Pilha {
  constructor(tam = 5) {
    // inicializando uma pilha
    this.tam = tam;
    this.topo = 0;
    this.dados = [this.tam];
  }

  push(dado) {
    if (!this.isFull()) {
      return this.dados[this.topo++] = dado;
    }
    throw new Error("StackOverflow");
  }

  pop() {
    // retirando o último elemento da pilha
    if (!this.isEmpty()) {
      // verificando se a pilha não está vazia
      return this.dados[--this.topo];
    }
    throw new Error("StackUnderflow");
  }

  top() {
    // indica o último elemento da pilha
    if (!this.isEmpty()) {
      // verificando se a pilha não está vazia
      return this.dados[this.topo - 1]; // pegando o último elemento da pilha
    }
  }

  clear() {
    this.dados = [];
    this.topo = 0;
  }

  size() {
    // tamanho da pilha
    return this.topo; // o topo indica o tamanho da pilha
  }

  isEmpty() {
    // pilha vazia
    return this.size() === 0; // se o tam for 0 indica que a pilha está vazia
  }


  isFull() {
    return this.size() === this.tam; // se o tam da pilha é igual ao tamanho que foi escolhido na instância da pilha
  }

  toString() {
    let pilha = ""; // armazena os elementos da pilha
    for (let i = 0; i < this.size(); i++) {
      if(i < this.size() - 1)
        pilha += this.dados[i] + " "; // pegando a pilha e colocando os elementos na string resultado
      else
        pilha += this.dados[i];

    }
    return pilha;
  }
}

