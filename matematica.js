console.log("========= Operações Matemáticas ========");
var operador = 5,
    operando = 10;

var soma = operador + operando;
console.log(`A soma entre ${operador} e ${operando} é igual a: ${soma}`) ;

var multiplicacao = operador * operando ;
console.log(`A multiplicacao entre ${operador}x${operando} = ${multiplicacao}`);

var subtracao = operador - operando;
console.log(`A subtracao entre ${operador} e ${operando} é igual a ${subtracao}`);

var divisao = operador / operando;
console.log(`${operador} dividipo por ${operando} é igual a ${divisao}`);


var potencia = operador ** operando;
console.log(`${operador} elevado a ${operando} = ${potencia}`);

var restoDaDivisao = operador % operando;
console.log(`O resto da divisao ${operador}/${operando} é ${restoDaDivisao}`);