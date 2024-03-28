import Inverte from "../../src/lista1/Q1_Inverte";

//let p = "ABACAXI";

test("Inverte palavra ABACAXI", () => {
  expect(Inverte("ABACAXI")).toBe("IXACABA");
});

test("Inverte palavra MESA", () => {
  expect(Inverte("MESA")).toBe("ASEM");
});

test("Inverte palavra CADEIRA", () => {
  expect(Inverte("CADEIRA")).toBe("ARIEDAC");
});

test("Inverte palavra PESSOAS", () => {
  expect(Inverte("PESSOAS")).toBe("SAOSSEP");
});

test("Inverte palavra COMIDA", () => {
  expect(Inverte("COMIDA")).toBe("ADIMOC");
});
