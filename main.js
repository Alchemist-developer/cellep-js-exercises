// // 1 Armazene seu nome em uma variável, depois faça a concatenação com a string  'Olá'  para escrever no console 'Olá SEUNOME'

var nome = 'Adryel Simon'
console.log(`Olá ${nome}`)

// // 2 Crie um programa que calcule a média dos valores:

var a = 10.5
var b = 33.96
var c = 20.2
var d = 8.4
var media = (a + b + c + d) / 4
console.log(media)

// // 3 Armazene os nomes de 5 frutas em um array, e escreva no console a fruta que esteja no índice 3.

const frutas = [`maca`, `pera`, `uva`, `kiwi`, `banana`]
console.log(frutas[3])

// // 4 Crie um programa que diga qual o comprimento das strings:

let js = `javascript`
let dev = `desenvolvimento`
let soma = `1+1`

console.log(`${js}  ${js.length} `)
console.log(`${js}  ${dev.length} `)
console.log(`${js}  ${soma.length} `)

// // 5 Crie uma função para cada uma das operações básicas da matemática (adição, subtração, divisão e multiplicação). As funções devem receber dois parâmetros numéricos e retornar o resultado da operação.

function soma (numA, numB) {
    return numA+numB
}

function sub (numA, numB) {
    return numA-numB
}

function div (numA, numB) {
    return numA/numB
}

function multi (numA, numB) {
    return numA*numB
}

// // 6 Crie um programa que identifique se um número é par ou ímpar
for (let i = 0; i <= 10; i++) {
    const par = i % 2 === 0 ? "par" : "impar";
    console.log(i, par);
}

// // 7 Crie um programa que identifique se uma pessoa é maior ou menor de idade

function idade (valor) {
    if (valor < 18) {
        console.log('menor de idade');
    } else {
    console.log('maior de idade')
    }
};
idade(10)

// 8 Crie uma função que receba 2 números inteiros como parâmetros, e retorne o maior valor entre eles.

function maior (a, b) {
return (Math.max(a, b));
} console.log(maior(10,15));

// 9 Crie um programa que armazene seu nome em uma constante, e escreva ele de trás para frente.
const meuNome = "Simon"
console.log(meuNome.split('').reverse().join(''));

// 10 Crie uma função que receba um valor numérico como parâmetro, e faça as seguintes comparações:
// Se o valor de entrada for divisível por 3, então escreva "Fizz" no console.
// Se o valor de entrada for divisível por 5, então escreva "Buzz" no console.
// Se o valor de entrada for divisível por 3 e 5, então escreva "FizzBuzz" no console.
// Se o valor de entrada não for divisível por 3 ou 5, escreva apenas o número no console.
// Dica: Qualquer número divisível por 3 ou 5, tem o resto da divisão igual a zero.

function compara (entrada) {
   if (entrada % 3 === 0 && entrada % 5 === 0 ) {
        console.log('FizzBuzz')
    } else if (entrada % 3 === 0) {
        console.log('Fizz')
    } else if (entrada % 5 === 0) {
        console.log('Buzz')
    } else 
    console.log(`não cumpre um requisito, o numéro é ${entrada}`)
}
compara(3)
