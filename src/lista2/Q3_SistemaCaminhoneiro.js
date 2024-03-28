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


export default class agendamentoCaminhoneiros {
    constructor(tam){
        this.tam = tam;
        this.agenda = [];
        this.primeiro = 0;
        this.ultimo = 0;
    }

    //enqueue
    chegadaCaminhoneiro(caminhoneiro){
        if(!this.carregamentoAtingido()){
            return this.agenda[this.ultimo++] = caminhoneiro;
        }
        throw new Error("Número de carregamento atingido");
    }

    //dequeue
    saidaCaminhoneiro(){
        if(this.aguardoCaminhoneiro()){
            return this.agenda[++this.primeiro];
        }
    }

    //isEmpty
    aguardoCaminhoneiro(){
        if(this.ultimo === this.primeiro)
            return false;
        return true;
    }

    //isFull
    carregamentoAtingido(){
        return this.ultimo - this.primeiro === this.tam;
    }

    //toString
    listarCaminhoneiros(){
        let lista = "";

        for(let i = this.primeiro; i < this.ultimo; i++){
            if(i < this.ultimo - 1)
                lista += `${i+1}-${this.agenda[i]} `;
            else
                lista += `${i+1}-${this.agenda[i]}`;
        }
        return lista;
    }

}