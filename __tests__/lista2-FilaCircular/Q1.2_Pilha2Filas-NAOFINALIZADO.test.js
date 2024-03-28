import Pilha2Filas from "../../src/lista2-FilaCircular/Q1.2_Pilha2Filas-NAOFINALIZADO";

let pf;

beforeEach(() => {
  pf = new Pilha2Filas();
});

test("Testando o push", () => {
  expect(pf.push("A")).toBe("A");
});

test("Testando o pop", () => {
  pf.push("G");
  pf.push("A");
  pf.push("L");
  pf.push("O");
  pf.pop();
  expect(pf.pop()).toBe("O");
});
