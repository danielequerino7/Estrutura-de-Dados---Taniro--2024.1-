/*
QUESTÃO 3: (ENADE 2017, Adaptada) Uma empresa trabalha na produção de concreto e
terceiriza o serviço de transporte do produto. Os caminhoneiros telefonam para a empresa e
registram seu interesse pelo trabalho. Todas as manhãs, os caminhoneiros estacionam no pátio
da empresa e aguardam sua vez. O atendimento segue o critério de ordem de chegada. Esse
processo é, atualmente, controlado pela secretária, que utiliza sua agenda para gerenciar os
motoristas diariamente. A empresa, que carrega, no máximo, 10 caminhões por dia, pretende
informatizar esse processo. Implemente um sistema que atenda as necessidades da empresa
considerando as possibilidades de chegada de um novo caminhoneiro, saída de um
caminhoneiro, verificar se existe caminhoneiro no aguardo, verifique se o número de
carregamentos do dia foi atingido, listar todos os caminhões no aguardo.
*/

import agendamentoCaminhoneiros from "../../src/lista2-FilaCircular/Q3.2_SistemaCaminhoneiro";

let c;

beforeEach(() => {
  c = new agendamentoCaminhoneiros(10);
});

test("Testando a inicialização do sistema", () => {
  expect(c.aguardoCaminhoneiro()).toBe(false);
  expect(c.carregamentoAtingido()).toBe(false);
});

test("Testando a chegada de caminhoneiros", () => {
  expect(c.chegadaCaminhoneiro("Joca")).toBe("Joca");
});

test("Testadno saida dos caminhoneiros", () => {
  c.chegadaCaminhoneiro("João");
  c.chegadaCaminhoneiro("José");
  c.chegadaCaminhoneiro("João Maria");
  c.saidaCaminhoneiro();
  expect(c.saidaCaminhoneiro()).toBe("João Maria");
});

test("Testando o aguardo de caminhoneiro", () => {
  c.chegadaCaminhoneiro("Carlos");
  c.chegadaCaminhoneiro("Robson");
  expect(c.aguardoCaminhoneiro()).toBe(true);
});

test("Testando o carregamento atingido", () => {
  c.chegadaCaminhoneiro("João");
  c.chegadaCaminhoneiro("José");
  c.chegadaCaminhoneiro("João Maria");
  c.chegadaCaminhoneiro("Antônio");
  c.chegadaCaminhoneiro("Francisco");
  c.chegadaCaminhoneiro("Bento");
  c.chegadaCaminhoneiro("Roberto");
  c.chegadaCaminhoneiro("Manuel");
  c.chegadaCaminhoneiro("Joaquim");
  c.chegadaCaminhoneiro("Rubens");
  expect(() => c.chegadaCaminhoneiro("Josafá")).toThrow(
    "Número de carregamento atingido"
  );
});

test("Testando a listagem em aguardo", () => {
  c.chegadaCaminhoneiro("Roberto");
  c.chegadaCaminhoneiro("Francisco");
  c.chegadaCaminhoneiro("Manuel");
  c.chegadaCaminhoneiro("Bento");
  expect(c.listarCaminhoneiros()).toBe(
    "1-Roberto 2-Francisco 3-Manuel 4-Bento"
  );
});
