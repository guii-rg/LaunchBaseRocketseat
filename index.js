//DESAFIO 01 DO MODULO INTRODUÇÃO A PROGRAMAÇÃO WEB
//CALCULADORA DE IMC
/*const nome = "Guilherme Ribeiro";
const peso = 90;
const altura = 1.69;

const imc = (peso /(altura*altura))

if(imc>=30) {
    console.log(`${nome}, Você está acima do peso`)
}else{
    console.log(`${nome}, Você não está acima do peso`)
}
*/

//DESAFIO 02 DO MODULO INTRODUÇÃO A PROGRAMAÇÃO WEB
// CALCULO DE APOSENTADORIA 

/*const nome="Guilherme Ribeiro";
const sexo="m";
const idade=95;
const contribuicao=30;

if ( sexo == 'm' && contribuicao >=35 || sexo == 'f' && contribuicao>=30){
    if (sexo == 'm' && contribuicao + idade >=95 || sexo == 'f' && contribuicao + idade >=85){
        console.log(`${nome}, você já pode se aposentar`)
    } else {
            console.log(`${nome}, você ainda não pode se aposentar`)
    } 
} else{
        console.log(`${nome}, você ainda não pode se aposentar`)
    } 
*/
//DESAFIO 03 DO MODULO INTRODUÇÃO A PROGRAMAÇÃO WEB
// CONSTRUÇÃO E IMPRESSÃO DE OBJETOS  
/*
const empresa ={
    nome: "Rocketseat",
    cor: "Roxo",
    foco: "Programação",
    endereco: {
        rua: "Rua Guilherme Gembala",
        numero: 260
    }
}
console.log(`A empresa ${empresa.nome}, está localizada na ${empresa.endereco.rua}, ${empresa.endereco.numero}`)
*/
//DESAFIO 03 DO MODULO INTRODUÇÃO A PROGRAMAÇÃO WEB
// VETORES E OBJETOS

const programador = {
        nome: "Guilherme Ribeiro",
        idade: 21,
        tecnologia: [
            {
                nometec: "JavaScript",
                especialidade: "Web"
            },
            {
                nometec: "C++",
                especialidade: "Desktop"
            }
        ]
    }
console.log(`O programador ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${programador.tecnologia[0].nometec} com especialidade em ${programador.tecnologia[0].especialidade}`)