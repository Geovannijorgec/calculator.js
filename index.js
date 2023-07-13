//importa a blibioteca prompt-sync para a constate prompt
const prompt = require('prompt-sync')();
//cria uma variavel numerica para a primeira entrada no usuario
var num1 = Number(prompt('Digite o primeiro valor: '));
//cria uma variavel responsavel pelos operadores que seram utilizados na segunda entrada do usuario 
var op = prompt('Digite a operação que deseja realiza: ');
//cria variavel para terceira entradado do usuario para finafizar o calculo
var num2 = Number(prompt('Digite o segundo valor: '));
//cria uma variavel responsavel por armazenar os operadores utilizados no calculo acima
var operadores = {
    '+': function soma(x,y) { 
        return x+y
    }, 
    '-': function sub(x,y) {
        return x-y
        
    },
    '/': function divisao(x,y) {
        return x/y
    },
    '*': function mutiplicacao(x,y) {
        return x*y
    }
}
//cria uma variavel responsavel por selecionar o operador utilizado
var operadoratual = operadores[op]; 
//se o operador for invalido retorna o erro ao usuario
if (operadoratual === undefined) {
    console.log('operador invalido.')
}
//se o operado for valido retorna o resultado do colculo para o usuario 
else{
    var resultado = operadoratual(num1,num2);
    console.log('O resultado é', resultado);
}