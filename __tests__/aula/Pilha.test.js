import Pilha from "../../src/aula/Pilha";

let p;

beforeEach(
    () => {
        p = new Pilha(4);
    }
);


test("Testando a inicialização do IsEmpty e o isFull", 
    () => {
        expect(p.isEmpty()).toBe(true);
        expect(p.isFull()).toBe(false);
    }
);

test("Testando o erro StackOverflor",
    () => {
        p.push(10);
        p.push(20);
        p.push(30);
        p.push(40);
        expect(()=> p.push(50)).toThrow("StackOverflow");
    }
);

test("Testando o erro StackUnderflow",
    () => {
        expect(() => p.pop()).toThrow("StackUnderflow");
    }
);

test("Testando o IsEmpty e o isFull já em uso", 
    () => {
        p.push(1);
        p.push(2);
        p.push(3);
        p.push(4);
        expect(p.isEmpty()).toBe(false);
        expect(p.isFull()).toBe(true);
    }
);


test("Testando o push",
    () => {
        expect(p.push(7)).toBe(7);
    }
);

test("Testando o push e o top",
    () => {
        p.push(10);
        p.push(100);
        expect(p.top()).toBe(100);
    }
);

test("Testando o pop",
    () => {
        p.push(7);
        p.push(11);
        p.push(84);
        p.pop();
        p.pop();
        expect(p.top()).toBe(7);
    }
);

test("Testando o size",
    () => {
        p.push("A");
        p.push("B");
        p.push("C");
        expect(p.size()).toBe(3);
    }
);

test("Testando o top",
    () => {
        p.push("C");
        p.push("Q");
        p.push("L");
        p.push("M");
        expect(p.top()).toBe("M");
    }
);

test("Testando o clear",
    () => {
        p.push(5);
        p.push(15);
        p.push(20)
        p.clear();
        expect(p.size()).toBe(0);
    }
);

test("Testando o toString",
    () => {
        p.push(1);
        p.push(2);
        p.push(3);
        expect(p.toString()).toBe("1 2 3");
    }
);