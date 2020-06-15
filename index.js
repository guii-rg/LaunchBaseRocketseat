//DESAFIO 01 DO MODULO INTRODUÇÃO A PROGRAMAÇÃO WEB
//CALCULADORA DE IMC
const nome = "Guilherme Ribeiro";
const peso = 90;
const altura = 1.69

const imc = (peso /(altura*altura))

if(imc>=30) {
    console.log(`${nome}, Você está acima do peso`)
}else{
    console.log(`${nome}, Você não está acima do peso`)
}