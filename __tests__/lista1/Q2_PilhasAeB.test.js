import PilhasAeB from "../../src/lista1/Q2_PilhasAeB";

let stack;

beforeEach(() => {
  stack = new PilhasAeB();
});

test("Testando os pushs", 
  () => {
  // stack.pushA(1);
  expect(stack.pushA(1)).toBe(1);
  expect(stack.pushB(10)).toBe(10);
});

test("Testando os pops", 
  () => {
  stack.pushA(20);
  stack.pushB(30);
  stack.pushA(21);
  stack.pushB(31);
  stack.pushA(22);

  stack.popA();
  stack.popA();
  stack.popB();
  expect(stack.popA()).toBe(20);
  expect(stack.popB()).toBe(30);
});

test("Testando os IsEmpty VAZIOS", 
  () => {
  expect(stack.isEmptyA()).toBe(true);
  expect(stack.isEmptyB()).toBe(true);
});

test("Testando os IsEmpty NÃO VAZIOS", 
  () => {
  stack.pushA("A1");
  stack.pushB("B1");
  expect(stack.isEmptyA()).toBe(false);
  expect(stack.isEmptyB()).toBe(false);
});

test("Testando os IsEmpty VAZIOS e NAO VAZIOS", 
  () => {
  stack.pushA("A1");
  stack.pushA("A2");
  expect(stack.isEmptyA()).toBe(false);
  expect(stack.isEmptyB()).toBe(true);
});

test("Testando os IsEmpty VAZIOS e NAO VAZIOS 2", 
  () => {
  stack.pushB("B1");
  stack.pushB("B2");
  expect(stack.isEmptyA()).toBe(true);
  expect(stack.isEmptyB()).toBe(false);
});
