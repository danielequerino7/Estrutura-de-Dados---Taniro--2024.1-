import Pilha from "../../src/aula/Pilha";
import TrocaTopo from "../../src/lista1/Q3_TrocaTopo";

let p;

beforeEach(() => {
  p = new Pilha();
});

test("Testando com tamanho IMPAR", () => {
  p.push(9);
  p.push(2);
  p.push(7);
  p.push(25);
  p.push(10);
  expect(TrocaTopo(p).toString()).toBe("10 2 7 25 9");
});

test("Testando com tamanho PAR", () => {
  p.push(60);
  p.push(8);
  p.push(73);
  p.push(1);
  expect(TrocaTopo(p).toString()).toBe("1 8 73 60");
});
