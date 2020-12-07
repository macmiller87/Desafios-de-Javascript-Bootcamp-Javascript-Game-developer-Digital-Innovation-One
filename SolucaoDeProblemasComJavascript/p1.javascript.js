/*
Desafio
Neste desafio sua tarefa será ler vários números e em seguida dizer quantas vezes cada número aparece, ou seja, deve-se escrever cada um dos valores distintos que aparecem na entrada por ordem crescente de valor.

Entrada
A primeira linha de entrada contem um único inteiro N, que indica a quantidade de valores que serão lidos para X (1 ≤ N ≤ 2000) logo em seguida. Com certeza cada número não aparecerá mais do que 20 vezes na entrada de dados.

Saída
Imprima a saída de acordo com o exemplo fornecido abaixo, indicando quantas vezes cada um deles aparece na entrada por ordem crescente de valor.
*/

let N = parseInt(gets());
let nums = {};
let ns;
for (let i = 0; i < N; i++) {
    ns = gets();
    if(typeof nums[ns] === 'undefined')
        nums[ns] = {valor: parseInt(ns), cnt:  1};
    else
        nums[ns].cnt++;
}


for(var [key, n] of Object.entries(nums)){
    console.log(`${n.valor} aparece ${n.cnt} vez(es)`);
}