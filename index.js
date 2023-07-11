const prompt = require('prompt-sync')();
var num1 = Number(prompt('Digite o primeiro valor: '));

var op = prompt('Digite a operação que deseja realiza: ');

var num2 = Number(prompt('Digite o segundo valor: '));

var resultado = 'operação invalida';
if (op === '+') {
    resultado = (num1 + num2);
}
if (op === '-') {
    resultado = (num1-num2);
}
if (op === '*') {
    resultado = (num1*num2);
}
if (op === '/') {
    resultado = (num1/num2)
}
if (resultado === 'operação invalida') {
    console.log('operação invalida')
}
if (resultado !== 'operação invalida') {
    console.log('O resultado é', resultado);    
}

