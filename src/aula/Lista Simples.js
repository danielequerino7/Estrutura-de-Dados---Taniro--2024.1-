class No {
  constructor(dado) {
    this.dado = dado;
    this.proximo = null;
  }
}

export default class ListaSimples {
  constructor() {
    this.head = new No();
    this.size = 0;
  }

  // adiciona no inicio da lista
  add(dado) {
    let novo_no = new No(dado);
    novo_no.proximo = this.head.proximo;
    this.head.proximo = novo_no;
    this.size++;
  }

  // adiciona no final da lista
  append(dado) {
    let novo_no = new No(dado);
    let aux = this.head;
    while(aux.proximo !== null){ // percorre ate achar a posicao.proximo que aponta para null
        aux = aux.proximo;
    }
    aux.proximo = novo_no;
    this.size++;
  }

  // adiciona em uma posição especifica da lista
  addAt(dado, posicao) {}

  // remove um no no inicio da lista
  removeFirst() {
    if(!this.isEmpty()){
        let aux = this.head.proximo;
        this.head.proximo = aux.proximo;
        this.size--;
        return;
    }
    throw new Error("Underflow");
  }

  // remove um no no final da lista
  removeLast() {
    if(!this.isEmpty()){
        let no_a = this.head;
        let no_b = no_a;
        while(no_a.proximo !== null) {
            no_b = no_a;
            no_a = no_a.proximo;
        }
        no_b.proximo = null;
        this.size--;
        return;
    }
    throw new Error("Underflow");
  }

  // remove um no numa posição especifica
  removeAt(posicao) {}

  // verifica se a lista está vazia
  isEmpty() {
    return this.head.proximo === null;
  }

  // pesquisa um dado na lista
  search(dado) {}

  // tamanho da lista
  length() {
    return this.size;
  }
}
