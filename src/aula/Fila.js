export default class Fila {
  constructor(tam = 5) {
    this.inicio = 0;
    this.fim = 0;
    this.tam = tam;
    this.dados = [this.tam];
  }

  enqueue(dado) {
    if (!this.isFull()) {
      return this.dados[this.fim++] = dado;
    }
    throw new Error("QueueOverflow");
  }

  dequeue() {
    if(!this.isEmpty()) {
      return this.dados[this.inicio++]; // observar a incrementação
    }
    throw new Error("QueueUnderflow");
  }

  front() {
    return this.dados[this.inicio];
  }

  isEmpty() {
    return this.inicio === this.fim;
  }

  isFull() {
    return this.size() === this.tam;
  }

  size() {
    return this.fim - this.inicio;
  }

  clear() {
    this.dados = [];
    this.inicio = 0;
    this.fim = 0;
  }

  toString() {
    let fila = "";

    for(let i = this.inicio; i < this.size(); i++){
        if(i < this.size() - 1)
            fila += this.dados[i] + " ";
        else
            fila += this.dados[i];
    }
    return fila;
  }
}
