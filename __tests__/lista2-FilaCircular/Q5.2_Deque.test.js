import DequeCircular from "../../src/lista2-FilaCircular/Q5.2_Deque";
import Deque from "../../src/lista2-FilaCircular/Q5.2_Deque";

let d;

beforeEach(() => {
  d = new DequeCircular();
});

test("Testando a inicialização do deque", () => {
  expect(d.isEmpty()).toBe(true);
  expect(d.isFull()).toBe(false);
});

test("Testando o addFirst se a fila estiver VAZIA", () => {
  expect(d.addFirst("A")).toBe(d.front());
});

test("Testando o addFirst em caso do inicio > 0", () => {
  d.enqueue(2);
  d.enqueue(4);
  d.enqueue(6);
  d.dequeue();
  d.addFirst(0);
  expect(d.addFirst(0)).toBe(d.front());
});

test("Testando o removeFirst", () => {
  d.enqueue("A");
  d.enqueue("E");
  d.enqueue("I");
  expect(d.removeFirst()).toBe("A");
});

test("Testando addLast", () => {
  d.enqueue("F");
  d.enqueue("U");
  d.enqueue("I");
  d.addLast("A");
  expect(d.addLast("A")).toBe(d.peekLast());
});

test("Testando o removeLast", () => {
  d.enqueue("M");
  d.enqueue("U");
  d.enqueue("L");
  d.enqueue("A");
  d.removeLast();
  expect(d.removeLast()).toBe("A");
});
