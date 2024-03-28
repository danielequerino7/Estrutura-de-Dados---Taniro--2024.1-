export default class FilaCircular {
  constructor(tam = 5) {
    this.tam = tam;
    this.inicio = 0;
    this.fim = 0;
    this.dados = [this.tam];
  }

  enqueue(dado) {
    if (!this.isFull()) {
      if (this.fim === this.tam) {
        this.fim = 0;
        return this.dados[this.fim++] = dado;
        
      } else {
        return this.dados[this.fim++] = dado;
        
      }
    }
    throw new Error("QueueOverflow");
  }

  dequeue() {
    if (!this.isEmpty()) {
      if (this.inicio === this.tam) {
        this.inicio = 0;
        return this.dados[this.inicio++]; // a observar esse comportamento
      } else {
        return this.dados[this.inicio++];
      }
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
    return this.inicio === this.fim + 1;
  }

  size() {
    if (this.inicio < this.fim) return this.fim - this.inicio;
    // this.inicio > this.fim
    else return this.tam - this.inicio + this.fim + 1;
  }

  clear() {
    this.fim = 0;
    this.inicio = 0;
    this.dados = [this.tam];
  }

  toString() {
    let filaCircular = "";
    for (let i = this.inicio; i < this.size(); i++) {
      if (i < this.size() - 1) filaCircular += this.dados[i] + " ";
      else filaCircular += this.dados[i];
    }
    return filaCircular;
  }
}
