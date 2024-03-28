/*
QUESTÃO 5: Uma fila duplamente terminada (abreviada como Deque, do inglês double ended
queue) é um tipo de dado abstrato que generaliza uma fila, para a qual os elementos podem ser
adicionados ou removidos da frente (cabeça) ou de trás (cauda). Sobre o Deque realize as
seguintes implementações utilizando a linguagem de programação Javascript.
i. Implemente a função para instanciar e inicializar um Deque. (0,5)
ii. Implemente a função de inserir no início de um Deque. (0,5)
iii. Implemente a função de remover do início de um Deque. (0,5)
iv. Implemente a função de inserir no fim de um Deque. (0,5)
v. Implemente a função de remover do fim de um Deque. (0,5)
*/

import Fila from "../aula/Fila";

export default class Deque extends Fila {
    constructor(){
        super();
    }

    addFirst(dado){
        if(this.isEmpty()){
            return this.enqueue(dado);
        }        
        else if(this.inicio > 0){
            return this.dados[this.inicio--] = dado;
        }
        else{
            for(let i = this.inicio; i > 0; i--){ // movendo todos os elementos para a proxima posição da fila para deixar o primeiro indice "livre"
                this.dados[i] = this.dados[i - 1];
            }
           // this.fim++;
            //this.inicio = 0;
            return this.dados[0] = dado;
        }
    }

    addLast(dado){
        return this.enqueue(dado);
    }

    removeFirst(){
        return this.dequeue();
    }

    removeLast(){
        if(!this.isEmpty())
            return this.dados[this.fim--];     
    }

    peekLast(){
        if(!this.isEmpty())
            return this.dados[this.fim - 1];
    }
}