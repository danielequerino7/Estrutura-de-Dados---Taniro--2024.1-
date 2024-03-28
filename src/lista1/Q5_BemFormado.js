/*
QUESTAO 5: É possível analisar se uma sequência parêntesis e colchetes está bem-formada,
ou seja, parênteses e colchetes são fechados na ordem inversa àquela em que foram abertos
utilizando uma pilha. Por exemplo, a sequência [ ( ) [ ( ) ] ] ( ) está bem-formada, enquanto ( ( )
] está malformada. Implemente um programa que recebe um texto e analisa se ele está bem
formado em termos de ordem de parêntesis e colchetes.
*/

import Pilha from "../aula/Pilha";

export default function BemFormado(texto) {
  let textoNovo = texto.replace(/\s/g, ""); // retirando os espaços da string
  let aux = new Pilha(textoNovo.length);
  let caractere;

  for (let i = 0; i < textoNovo.length; i++) {
    if (textoNovo[i] === "(" || textoNovo[i] === "[") 
      aux.push(textoNovo[i]);
    else {
      caractere = aux.pop();
      if (
        (caractere === "[" && textoNovo[i] !== "]") ||
        (caractere === "(" && textoNovo[i] !== ")")
      ) {
        return false;
      }
    }
  }
  return aux.isEmpty();
}
