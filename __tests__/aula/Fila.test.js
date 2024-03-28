import Fila from "../../src/aula/Fila";

let q;

beforeEach(
    () => {
        q = new Fila();
    }
);

test("Testando a inicialização do IsEmpty e o isFull",
    () => {
        expect(q.isFull()).toBe(false);
        expect(q.isEmpty()).toBe(true);
    }
);

test("Testando o erro QueueOverflow",
    () => {
        q.enqueue(1);
        q.enqueue(10);
        q.enqueue(2);
        q.enqueue(20);
        q.enqueue(3);
        expect(() => q.enqueue(30)).toThrow("QueueOverflow");
    }
);

test("Testando o erro QueueUnderflow",
    () => {
        expect(() => q.dequeue()).toThrow("QueueUnderflow");
    }
);

test("Testando o isEmpty e o isFull já em uso",
    () => {
        q.enqueue("A");
        q.enqueue("B");
        q.enqueue("C");
        q.enqueue("D");
        q.enqueue("E");
        expect(q.isFull()).toBe(true);
        expect(q.isEmpty()).toBe(false);
    }
);

test("Testando o enqueue",
    () => {
        expect(q.enqueue(1)).toBe(1);
    }
);

test("Testando o enqueue 2",
    () => {
        q.enqueue("A");
        q.enqueue("E");
        expect(q.enqueue("D")).toBe("D");
    }
);

test("Testando o dequeue",
    () => {
        q.enqueue(5);
        q.enqueue(9);
        q.enqueue(13);
        //q.dequeue();
        expect(q.dequeue()).toBe(5);
    }
);

test("Testando o front",
    () => {
        q.enqueue("O");
        q.enqueue("L");
        q.enqueue("A");
        expect(q.front()).toBe("O");
    }
);

test("Testando o size e o clear",
    () => {
        q.enqueue("C");
        q.enqueue("A");
        q.enqueue("M");
        q.enqueue("A");
        expect(q.size()).toBe(4);
        q.clear();
        expect(q.size()).toBe(0); // depois de implementar e testar com o erro devo mudar para 0
    }
);

test("Testando o toString",
    () => {
        q.enqueue("S");
        q.enqueue("O");
        q.enqueue("N");
        q.enqueue("O");
        expect(q.toString()).toBe("S O N O");
    }
);