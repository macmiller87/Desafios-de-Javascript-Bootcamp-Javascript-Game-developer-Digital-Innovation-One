/*
Desafio
Crie um programa onde você receberá valores inteiros não negativos como entrada.

Ordene estes valores de acordo com o seguinte critério:

Primeiro os Pares
Depois os Ímpares
Você deve exibir os pares em ordem crescente e na sequência os ímpares em ordem decrescente.

Entrada
A primeira linha de entrada contém um único inteiro positivo N (1 < N < 105) Este é o número de linhas de entrada que vem logo a seguir. As próximas N linhas terão, cada uma delas, um valor inteiro não negativo.

Saída
Exiba todos os valores lidos na entrada segundo a ordem apresentada acima. Cada número deve ser impresso em uma linha, conforme exemplo de saída abaixo.
*/

let num = 0;
let index = 0;

num = parseInt(gets());

let numeros = Array(num);

while (index < num ) {
  numero = parseInt(gets());
  if (numero >= 0 ) {
    numeros[index] = numero;
    index++;
  }
};

pares = numeros.filter(value => value % 2 == 0);
impares = numeros.filter(value => value % 2 != 0);

pares.sort((m, n) => m - n);
impares.sort((m, n) => n - m);

pares.forEach(i => console.log(i))
impares.forEach(i => console.log(i))