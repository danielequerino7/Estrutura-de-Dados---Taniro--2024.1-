import Pilha from "../../src/aula/Pilha";
import Conversor from "../../src/lista1/Q4_Conversor";

let s;
beforeEach(() => {
  s = new Conversor(11);
});

test("Testando número 10", () => {
  expect(s.conversor(10)).toBe("1010");
});

test("Testando número 15", () => {
  expect(s.conversor(15)).toBe("1111");
});

test("Testando número 70", () => {
  expect(s.conversor(70)).toBe("1000110");
});

test("Testando número 806", () => {
  expect(s.conversor(806)).toBe("1100100110");
});

test("Testando número 1031", () => {
  expect(s.conversor(1031)).toBe("10000000111");
});
