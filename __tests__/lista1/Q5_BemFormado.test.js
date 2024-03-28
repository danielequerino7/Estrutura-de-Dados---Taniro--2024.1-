import BemFormado from "../../src/lista1/Q5_BemFormado";

let texto;

test("Verificando padrão 1", () => {
  texto = "[ ( ) [ ( ) ] ] ( )";
  expect(BemFormado(texto)).toBe(true);
});

test("Verificando padrão 2", () => {
  texto = "( ( ) ]";
  expect(BemFormado(texto)).toBe(false);
});

test("Verificando padrão 3", () => {
  texto = "[ ( ( ) ) ]";
  expect(BemFormado(texto)).toBe(true);
});

test("Verificando padrão 4", () => {
  texto = "[ ( ( ";
  expect(BemFormado(texto)).toBe(false);
});

test("Verificando padrão 5", () => {
  texto = "[ [ ] () ]";
  expect(BemFormado(texto)).toBe(true);
});
