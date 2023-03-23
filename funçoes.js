function OlaMundo() {
    console.log("Olá Mundo")
}

OlaMundo();

function BomDia(nome){
    return (` Bom Dia ,${nome}!`);
}

console.log(BomDia("Nicolly"));
var _BomDia = BomDia ("Fulano");
console.log(_BomDia);

function soma(valor1, valor2){
    return valor1 + valor2;
}

var resultado = soma();
console.log(resultado);

var pessoa = {
    nome: "Nicolly Reis",
    idade: 18,
    altura: 1.63,
    gênero: "F",
    peso: 62,
    acordado: true,
    dormir: function(){
        pessoa.acordado = false;
    },
    acordar: function(){
        pessoa.acordado = true;
    },
    aniversario: function(){[
        pessoa.idade += 1 
    ]}
} 
console.log(pessoa);
pessoa.dormir();
pessoa.aniversario();
console.log(pessoa);


/**Função anônima */
(function(){
    console.log("Fui executada");
}) ()


/**Com a palavra 'const' a palavra atribuida não pode ser mudada */
const funcaoAleatoria = function(numero){
  console.log("Ebaaa", Math.random(), numero);
}

funcaoAleatoria = function(){
    console.log("Foi sobrescrita");
}

funcaoAleatoria(2);

const arrowFunction = () => {
    console.log("Ebaaa", Math.random() * 10)
}