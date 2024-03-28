import Hello from "../../src/aula/Hello";

let h;

beforeEach(() => {
  h = new Hello();
});

test("Hello World", () => {
  expect(h.toString()).toBe("Hello World");
});

test("Hello TADS", () => {
  let p = new Hello("TADS");
  expect(p.toString()).toBe("Hello TADS");
});

test("Hello pessoa", () => {
  let nome = new Hello("Daniele");
  expect(nome.toString()).toBe("Hello Daniele");
});
