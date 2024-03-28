import IntercalarFilas from "../../src/lista2-FilaCircular/Q4.2_Intercalar";
import FilaCircular from "../../src/aula/FilaCircular";

let f1;
let f2;

beforeEach(() => {
  f1 = new FilaCircular(3);
  f2 = new FilaCircular(3);
});

test("Testando a função de intercalar numeros", () => {
  f1.enqueue(1);
  f1.enqueue(2);
  f1.enqueue(3);
  f2.enqueue(10);
  f2.enqueue(20);
  f2.enqueue(30);
  expect(IntercalarFilas(f1, f2)).toBe("1 10 2 20 3 30");
});

test("Testando a função de intercalar string", () => {
  f1.enqueue("B");
  f1.enqueue("N");
  f1.enqueue("N");
  f2.enqueue("A");
  f2.enqueue("A");
  f2.enqueue("A");
  expect(IntercalarFilas(f1, f2)).toBe("B A N A N A");
});
