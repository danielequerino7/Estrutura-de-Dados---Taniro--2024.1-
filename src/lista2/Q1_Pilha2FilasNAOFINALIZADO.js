/*
QUESTAO 1: Implemente uma pilha usando a implementação de duas filas básicas.
*/
import Fila from "../aula/Fila";

export default class Pilha2Filas{
    constructor(tam = 5){
        this.tam = tam;
        this.fila1 = new Fila(this.tam);
        this.fila2 = new Fila(this.tam);
    }

    push(dado) {
        if(this.isFull()){
            throw new Error("StackOverflow");          
        }else{
            while(this.fila1.size > 0){
                this.fila2.enqueue(this.fila1.dequeue());
            }
            this.fila1.enqueue(dado);
            while(this.fila2.size() > 0){
                this.fila1.enqueue(this.fila2.dequeue());
            }
        }
        
    }

    pop() {
        return this.fila1.dequeue();
        //throw new Error("StackUnderflow")
    }

    top() {
        return this.fila1.front();
    }

    isEmpty() {
        return this.fila1.isEmpty();
    }

    isFull() {
        return this.fila1.isFull();
    }

    size() {
        return this.fila1.size();
    }

    clear() {
        return this.fila1.clear();
    }

    toString() {
        return this.fila1.toString();
    }
}
